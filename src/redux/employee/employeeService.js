"use client"

import { apiSlice } from "../api";

export const employeeApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createEmployee: builder.mutation({
            query: (formData) => ({
                url: '/api/v1/employees',
                method: 'POST',
                body: formData,
                formData: true, // Important for FormData
            }),
            invalidatesTags: ['Employees'],
        }),
        getEmployees: builder.query({
            query: () => '/api/v1/employees',
            providesTags: ['Employees'],
        }),
        getEmployee: builder.query({
            query: (id) => `/api/v1/employees/${id}`,
            providesTags: (result, error, id) => [{ type: 'Employee', id }],
        }),
        updateEmployee: builder.mutation({
            query: ({ id, ...formData }) => ({
                url: `/api/v1/employees/${id}`,
                method: 'PUT',
                body: formData,
                formData: true,
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: 'Employee', id },
                'Employees',
            ],
        }),
        deleteEmployee: builder.mutation({
            query: (id) => ({
                url: `/api/v1/employees/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Employees'],
        }),
    }),
});

export const {
    useCreateEmployeeMutation,
    useGetEmployeesQuery,
    useGetEmployeeQuery,
    useUpdateEmployeeMutation,
    useDeleteEmployeeMutation,
} = employeeApiSlice;
