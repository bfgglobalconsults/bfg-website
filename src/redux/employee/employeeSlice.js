"use client"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import employeeService from "./employeeService";

// Fetch all employees
export const fetchEmployees = createAsyncThunk(
    "employees/fetchEmployees", 
    async (_, thunkAPI) => {
        try {
            return await employeeService.getEmployees(); 
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Create new employee
export const createEmployee = createAsyncThunk(
    "employees/createEmployee",
    async (employeeData, thunkAPI) => {
        try {
            return await employeeService.createEmployee(employeeData);
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

const employeeSlice = createSlice({
    name: "employees",
    initialState: {
        list: [],
        error: null,
        loading: false,
        success: false,
    },
    reducers: {
        reset: (state) => {
            state.loading = false;
            state.error = null;
            state.success = false;
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch employees cases
            .addCase(fetchEmployees.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEmployees.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading = false;
            })
            .addCase(fetchEmployees.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            // Create employee cases
            .addCase(createEmployee.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createEmployee.fulfilled, (state, action) => {
                state.list.push(action.payload);
                state.loading = false;
                state.success = true;
            })
            .addCase(createEmployee.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});

export const { reset } = employeeSlice.actions;
export default employeeSlice.reducer;