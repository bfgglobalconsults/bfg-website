"use client"

import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { apiSlice } from "../api";

const API_URL = '/api/v1/users/'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const authApiSlice = apiSlice.injectEndpoints({
    baseEndPoint: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: API_URL + 'loginUser',
                method: 'POST',
                body: {...credentials}
            })
        })
    })
})

export const userCreateApiSlice = apiSlice.injectEndpoints({
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: builder => ({
        createUser: builder.mutation({
            query: credentials => ({
                url: API_URL,
                method: 'POST',
                body: {...credentials}
            })
        }),
    })
})

export const {
    useCreateUserMutation
} = userCreateApiSlice

export const {
    useLoginMutation
} = authApiSlice