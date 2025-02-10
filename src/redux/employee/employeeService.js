"use client"

import TokenService from '@/utils/Token.service';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const API_URL = '/api/v1/employee'

export const employeeApi = createApi({
  reducerPath: 'employeeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = TokenService.getLocalAccessToken();
      
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: () => `${API_URL}/getEmployees`,
    }),
    createEmployee: builder.mutation({
      query: (employeeData) => ({
        url: `${API_URL}/addEmployee`,
        method: 'POST',
        body: employeeData,
      }),
    }),
    updateEmployee: builder.mutation({
      query: ({ id, ...employeeData }) => ({
        url: `${API_URL}/${id}`,
        method: 'PUT',
        body: employeeData,
      }),
    }),
    deleteEmployee: builder.mutation({
      query: (id) => ({
        url: `/employees/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetEmployeesQuery,
  useCreateEmployeeMutation,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
} = employeeApi;
