import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
};

export const loginThunk = createAsyncThunk(
    'auth/login',  // action type prefix

    // payloadCreator — hàm async chứa logic gọi API
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                'http://localhost:3001/users'
            );
            const users = response.data;

            const user = users.find(
                (u) => u.username === credentials.username
                    && u.password === credentials.password
            );

            if (user) {
                const { password, ...safeUser } = user;
                return safeUser;  // → payload ở fulfilled
            } else {
                return rejectWithValue(
                    'Tài khoản hoặc mật khẩu không chính xác'
                );
            }
        } catch (error) {
            return rejectWithValue(
                'Không thể kết nối đến máy chủ'
            );
        }
    }
);



const authSlice = createSlice({
    name: 'auth',  // Tên slice → prefix cho action type
    initialState,
    reducers: {
        // Mỗi hàm = 1 case trong switch-case cũ
        // Redux Toolkit cho phép "mutate" state (nhờ Immer)

        loginStart(state) {
            state.loading = true;  // Thay: return {...state, loading:true}
            state.error = null;
        },

        loginSuccess(state, action) {
            state.isAuthenticated = true;
            state.user = action.payload;  // payload = user object
            state.loading = false;
        },

        loginFailure(state, action) {
            state.loading = false;
            state.error = action.payload;  // payload = error string
        },

        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
        },

        clearError(state) {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Khi API bắt đầu (= LOGIN_START)
            .addCase(loginThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            // Khi API thành công (= LOGIN_SUCCESS)
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.user = action.payload;  // safeUser
                state.loading = false;
            })
            // Khi API thất bại (= LOGIN_FAILURE)
            .addCase(loginThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;  // error msg
            });
    },

});

// createSlice TỰ ĐỘNG tạo action creators:
//   loginStart()    → { type: 'auth/loginStart' }
//   loginSuccess(u) → { type: 'auth/loginSuccess', payload: u}
export const { loginStart, loginSuccess, loginFailure,
    logout, clearError } = authSlice.actions;

// Export reducer → dùng trong configureStore
export default authSlice.reducer;
