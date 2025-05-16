"use client"
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logOut, setCredentials } from './auth/authSlice';
import TokenService from '@/utils/Token.service';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/16/solid';

const apiLink = process.env.NEXT_PUBLIC_BASE_URL

const baseQuery = fetchBaseQuery({
    baseUrl: '/api',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => { 
        const token = getState()?.auth?.token
        const tokenExpired = TokenService.isAccesExpired();
        if (token) {
            if(!tokenExpired) {
                headers.set('Authorization', `Bearer ${token.accessToken}`)
            } else {
                headers.set('Authorization', `Bearer ${token.accessToken}`)
                headers.set("x-refresh", `${token.refreshToken}`)
            }
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => { 
    let result = await baseQuery(args, api, extraOptions)

    if (result?.error?.originalStatus === 403) {
        console.log('sending refresh token ')
        const refreshResult = await baseQuery('/refresh', api, extraOptions)
        console.log(refreshResults)
        if (refreshResult?.data) {
            const user = api.getState().auth.user
            api.dispatch(setCredentials({ response: refreshResult.data }))
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }
    }
    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})