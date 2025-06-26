"use client"
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();
const apiLink = process.env.NEXT_PUBLIC_BASE_URL;

export const AuthProvider = ({ children }) => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(
      () => typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null
    );
    const [loading, setLoading] = useState(true); // Start as true for initial check

    // Persist accessToken in localStorage
    useEffect(() => {
        if (accessToken) {
            localStorage.setItem('accessToken', accessToken);
        } else {
            localStorage.removeItem('accessToken');
        }
    }, [accessToken]);

    // Persist user in localStorage
    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    // Attach token to every axios request
    useEffect(() => {
        const requestInterceptor = axios.interceptors.request.use(
            (config) => {
                if (accessToken) {
                    config.headers['Authorization'] = `Bearer ${accessToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );
        return () => axios.interceptors.request.eject(requestInterceptor);
    }, [accessToken]);

    // Fetch user on mount or when accessToken changes
    useEffect(() => {
        const fetchUser = async () => {
            if (!accessToken) {
                setUser(null);
                setLoading(false);
                return;
            }
            setLoading(true);
            try {
                const res = await axios.get(`${apiLink}/api/v1/users/current-user`, {
                    headers: { Authorization: `Bearer ${accessToken}` }
                });
                setUser(res.data.data);
            } catch (err) {
                setUser(null);
                setAccessToken(null);
                localStorage.removeItem('accessToken');
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, [accessToken]);

    const login = async (credentials) => {
        setLoading(true);
        try {
            const res = await axios.post(
                `${apiLink}/api/v1/users/loginUser`,
                credentials
            );
            setUser(res.data.data.user);
            setAccessToken(res.data.data.accessToken);
            localStorage.setItem('user', JSON.stringify(res.data.data.user));
            toast.success('Successfully logged in');
            console.log('Login response:', res.data);
            return res.data;
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        setLoading(true);
        try {
            setUser(null);
            setAccessToken(null);
            localStorage.removeItem('accessToken');
            localStorage.removeItem('user');
            toast.success('Successfully logged out');
            router.push('/login');
        } catch (error) {
            toast.error('Something went wrong while logging out');
            console.error('Logout error:', error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthContext.Provider value={{ user, accessToken, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};