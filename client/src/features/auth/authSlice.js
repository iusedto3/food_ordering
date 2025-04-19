import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authApi from '../../api/authApi';

export const login = createAsyncThunk(
'auth/login',
async (userData, { rejectWithValue }) => {
try {
    const response = await authApi.login(userData);
    return response.data;
} catch (err) {
    return rejectWithValue(err.response.data);
}
}
);

export const register = createAsyncThunk(
'auth/register',
async (userData, { rejectWithValue }) => {
try {
    const response = await authApi.register(userData);
    return response.data;
} catch (err) {
    return rejectWithValue(err.response.data);
}
}
);

const authSlice = createSlice({
name: 'auth',
initialState: {
user: null,
token: null,
status: 'idle',
error: null
},
reducers: {
logout: (state) => {
    state.user = null;
    state.token = null;
}
},
extraReducers: (builder) => {
builder
    .addCase(login.pending, (state) => {
    state.status = 'loading';
    })
    .addCase(login.fulfilled, (state, action) => {
    state.status = 'succeeded';
    state.user = action.payload.user;
    state.token = action.payload.token;
    })
    .addCase(login.rejected, (state, action) => {
    state.status = 'failed';
    state.error = action.payload.message;
    })
    .addCase(register.pending, (state) => {
    state.status = 'loading';
    })
    .addCase(register.fulfilled, (state, action) => {
    state.status = 'succeeded';
    state.user = action.payload.user;
    state.token = action.payload.token;
    })
    .addCase(register.rejected, (state, action) => {
    state.status = 'failed';
    state.error = action.payload.message;
    });
}
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;