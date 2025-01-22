"use client"
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logOut, setCredentials } from './auth/authSlice';
import TokenService from '@/utils/Token.service';

const apiLink = process.env.NEXT_PUBLIC_BASE_URL

const baseQuery = fetchBaseQuery({
    
})