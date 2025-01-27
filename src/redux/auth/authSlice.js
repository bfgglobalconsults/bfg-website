"use client"
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';
import { jwtDecode } from 'jwt-decode';
import TokenService from '@/utils/Token.service';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: TokenService.getUser(),
        token: TokenService.getToken()
    },
    reducers: {
        setCredentials: (state, action) => {
            const { response } = action.payload;
            const decodedUser = jwtDecode(response?.data?.accessToken)
            
            state.user = decodedUser
            state.auth = response?.data?.accessToken

            TokenService.updateLocalAccessToken(response)
        },
        logOut: (state, action) => {
            state.user = null
            state.token = null
            TokenService.removeUser();
        }
    }
})

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer

export const selectCurrentUser = (state) => {
    if (state?.auth?.user) return state.auth.user
    return null
}

export const selectCurrentToken = (state) => {
    if (state?.auth?.token) return state.auth.token
    return null
}