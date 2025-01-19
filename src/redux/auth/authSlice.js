import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

// Initial state without localStorage
const initialState = {
    user: null,
    token: null,
    isError: false,
    isSuccess: false, 
    isLoading: false,
    message: '',
}

// Register user
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        const response = await authService.register(user)
        // Expecting response to contain user data and token
        return response
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) 
            || error.message 
            || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Login user 
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        const response = await authService.login(user)
        // Expecting response to contain user data and token
        return response
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) 
            || error.message 
            || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Logout user
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await authService.logout()
        return 'User logged out successfully'
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) 
            || error.message 
            || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload.user
                state.token = action.payload.token
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
                state.token = null
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload.user
                state.token = action.payload.token
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
                state.token = null
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null
                state.token = null
            })
    },
})

export const { reset } = authSlice.actions;
export default authSlice.reducer