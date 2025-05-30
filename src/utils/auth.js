import axios from "axios";
import { useContext } from 'react';
const apiLink = process.env.NEXT_PUBLIC_BASE_URL

const handleLogin = async (data) => {
    try {
        const response = await axios.post(`${apiLink}/api/v1/users/loginUser`, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.data) {
            throw new Error('Login failed');
        }

        toast.success('Successfully logged in');
        console.log('Login successful:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error during login:', error);
        toast.error(error.response?.data?.message || 'Login failed');
        throw error;
    }
}




