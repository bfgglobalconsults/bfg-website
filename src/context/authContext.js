"use client"
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();
const apiLink = process.env.NEXT_PUBLIC_BASE_URL;
export const AuthProvider = ({ children }) => {
        const { push } = useRouter()
    
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    // const [refreshToken, setRefreshToken] = useState(null);
    const [loading, setLoading] = useState(false);

    // useEffect(() => { 
    //     const storedUser = localStorage.getItem('user');
    //     const storedAccessToken = localStorage.getItem('accessToken');
    //     // const storedRefreshToken = localStorage.getItem('refreshToken');

    //     if ( storedUser && storedAccessToken ) {
    //         try {
    //             setUser(JSON.parse(storedUser));
    //             setAccessToken(storedAccessToken);
    //             // setRefreshToken(storedRefreshToken);
    //         } catch (error) {
    //             console.error('Error parsing stored user:', error);
    //             localStorage.removeItem('user');
    //         }
    //     }
    //     setLoading(false);
    // }, []);

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

        return () => {
            axios.interceptors.request.eject(requestInterceptor);
        }
     }, [ accessToken]);

    const login = async (credentials) => {
        try {
            setLoading(true);
            const response = await axios.post(`${apiLink}/api/v1/users/loginUser`, credentials, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            // if (!response.data || !response.data.accessToken) {
            //     throw new Error('Login failed');
            // }
            // const { user: userData, accessToken } = response.data;
            
            setUser(response.data.user);
            setAccessToken(response.data.accessToken);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.setItem('accessToken', response.data.accessToken);
push('/admin');
            toast.success('Successfully logged in');
            console.log('Login successful:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error during login:', error);
            toast.error(error.response?.data?.message || 'Login failed');
            throw error;
        } finally {
            setLoading(false);
        }
    };
    
    const logout = async () => {
        try {
            setLoading(true);
            setUser(null);
            setAccessToken(null);
            localStorage.removeItem('user');
            localStorage.removeItem('accessToken');
            toast.success('Successfully logged out');
            
        } catch (error) {
            console.error('Error during logout:', error);
            toast.error(error.response?.data?.message || 'Logout failed');
            
        } finally {
            setLoading(false);
        }
       
    };


 

  return (
    <AuthContext.Provider value={{user, setUser, accessToken, login, logout, loading}}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);