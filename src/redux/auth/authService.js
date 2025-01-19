import axios from 'axios'

const API_URL = 'https://bfg-website-api.onrender.com';

// SignUp user
const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/api/users/register`, userData)
        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data
    } catch (error) {
        throw error.response?.data?.message || error.message || 'An error occurred during registration'
    }
}

// Login user
const login = async (userData) => { 
    try {
        const response = await axios.post(`${API_URL}/api/users/login`, userData)
        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data
    } catch (error) {
        throw error.response?.data?.message || error.message || 'An error occurred during login'
    }
}


// Logout user
const logout = () => { 
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login
}

export default authService;