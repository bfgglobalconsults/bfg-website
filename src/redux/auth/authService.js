import axios from 'axios'

const API_URL = '/api/users/'

// Register user
const register = async (userData) => {
    const response = await axios.post(API_URL + 'register', userData)
    
    // Response should contain both user data and token
    // Example response.data = { user: {...}, token: "jwt_token_here" }
    return response.data
}

// Login user
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)
    
    // Response should contain both user data and token
    // Example response.data = { user: {...}, token: "jwt_token_here" }
    return response.data
}

// Logout user
const logout = async () => {
    // If you need to notify the backend about logout
    try {
        await axios.post(API_URL + 'logout')
    } catch (error) {
        console.error('Logout error:', error)
    }
}

// Helper function to set auth token in axios headers
const setAuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

const authService = {
    register,
    login,
    logout,
    setAuthToken
}

export default authService