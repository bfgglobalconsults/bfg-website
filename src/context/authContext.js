"use client"
import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

// Define types for better code organization and type safety
const AuthContext = createContext({
    user: null,
    loading: false,
    error: null,
    login: async () => {},
    logout: async () => {},
    isAuthenticated: false,
});

const apiLink = process.env.NEXT_PUBLIC_BASE_URL;

// Custom hook for handling API errors
const useApiError = () => {
    return useCallback((error) => {
        const message = error?.response?.data?.message || 'An error occurred';
        toast.error(message);
        return message;
    }, []);
};

export const AuthProvider = ({ children }) => {
    const router = useRouter();
    const handleApiError = useApiError();
    
    const [state, setState] = useState({
        user: null,
        loading: false,
        error: null,
        isAuthenticated: false
    });

    // Memoized state updater
    const updateState = useCallback((newState) => {
        setState(prev => ({ ...prev, ...newState }));
    }, []);

    // Configure axios defaults
    useEffect(() => {
        const requestInterceptor = axios.interceptors.request.use(
            (config) => {
                updateState({ loading: true, error: null });
                return config;
            },
            (error) => {
                updateState({ loading: false, error: error.message });
                return Promise.reject(error);
            }
        );

        const responseInterceptor = axios.interceptors.response.use(
            (response) => {
                updateState({ loading: false });
                return response;
            },
            (error) => {
                const message = handleApiError(error);
                updateState({ loading: false, error: message });
                return Promise.reject(error);
            }
        );

        return () => {
            axios.interceptors.request.eject(requestInterceptor);
            axios.interceptors.response.eject(responseInterceptor);
        };
    }, [updateState, handleApiError]);

    // Check authentication status on mount
    // useEffect(() => {
    //     const checkAuth = async () => {
    //         try {
    //             updateState({ loading: true });
    //             const response = await axios.get(`${apiLink}/api/v1/users/current-user`, {
    //                 withCredentials: true
    //             });
    //             updateState({
    //                 user: response.data.data,
    //                 isAuthenticated: true,
    //                 loading: false
    //             });
    //         } catch (error) {
    //             updateState({
    //                 user: null,
    //                 isAuthenticated: false,
    //                 loading: false
    //             });
    //         }
    //     };
    //     checkAuth();
    // }, [updateState]);

    const login = useCallback(async (credentials) => {
        try {
            updateState({ loading: true, error: null });
            const response = await axios.post(
                `${apiLink}/api/v1/users/loginUser`,
                credentials,
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            
            const { user: userData } = response.data.data;
            updateState({
                user: userData,
                isAuthenticated: true,
                loading: false
            });
            
            toast.success('Successfully logged in');
            return response.data;
        } catch (error) {
            const message = handleApiError(error);
            updateState({ error: message, loading: false });
            throw error;
        }
    }, [updateState, handleApiError]);

    const logout = useCallback(async () => {
        try {
            updateState({ loading: true });
            await axios.post(`${apiLink}/api/v1/users/logout`, {}, {
                withCredentials: true
            });
            
            updateState({
                user: null,
                isAuthenticated: false,
                loading: false
            });
            
            toast.success('Successfully logged out');
            router.push('/login');
        } catch (error) {
            const message = handleApiError(error);
            updateState({ error: message, loading: false });
        }
    }, [updateState, handleApiError, router]);

    const value = {
        ...state,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook with error handling
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};