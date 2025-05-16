"use client"

import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { apiSlice } from "../api";

const API_URL = '/v1/users/'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const authApiSlice = apiSlice.injectEndpoints({
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
    endpoints: builder => ({
        createUser: builder.mutation({
            query: credentials => ({
                url: API_URL + 'register',
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