import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3001/expenses';


// GET ALL EXPENSES
export const fetchExpenses = createAsyncThunk(
    'expenses/fetchExpenses',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


// GET EXPENSE BY ID
export const fetchExpenseById = createAsyncThunk(
    'expenses/fetchExpenseById',
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${API_URL}/${id}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


// ADD EXPENSE
export const addExpense = createAsyncThunk(
    'expenses/addExpense',
    async (expense, { rejectWithValue }) => {
        try {
            const response = await axios.post(API_URL, expense);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


// UPDATE EXPENSE
export const updateExpense = createAsyncThunk(
    'expenses/updateExpense',
    async ({ id, updatedExpense }, { rejectWithValue }) => {
        try {
            const response = await axios.put(`${API_URL}/${id}`, updatedExpense);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


// DELETE EXPENSE
export const deleteExpense = createAsyncThunk(
    'expenses/deleteExpense',
    async (id, { rejectWithValue }) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);



const expenseSlice = createSlice({
    name: 'expenses',

    initialState: {
        expenses: [],
        selectedExpense: null,
        loading: false,
        error: null
    },

    reducers: {},

    extraReducers: (builder) => {

        builder

            // FETCH ALL
            .addCase(fetchExpenses.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchExpenses.fulfilled, (state, action) => {
                state.loading = false;
                state.expenses = action.payload;
            })
            .addCase(fetchExpenses.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })


            // FETCH BY ID
            .addCase(fetchExpenseById.fulfilled, (state, action) => {
                state.selectedExpense = action.payload;
            })


            // ADD
            .addCase(addExpense.fulfilled, (state, action) => {
                state.expenses.push(action.payload);
            })


            // UPDATE
            .addCase(updateExpense.fulfilled, (state, action) => {
                const index = state.expenses.findIndex(
                    (exp) => exp.id === action.payload.id
                );
                if (index !== -1) {
                    state.expenses[index] = action.payload;
                }
            })


            // DELETE
            .addCase(deleteExpense.fulfilled, (state, action) => {
                state.expenses = state.expenses.filter(
                    (exp) => exp.id !== action.payload
                );
            });
    }
});

export default expenseSlice.reducer;