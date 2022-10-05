import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {signIn} from './authApi'

export interface IUser {
    id?: number
    login: string
    password?: string
}

export interface IAuth {
    isLoggedIn: boolean
    user: IUser | null
    isLoaded: boolean
    error: undefined | string
}

export const signInAsync = createAsyncThunk(
    'auth/SIGN_IN',
    async (user: IUser) => {
        const response = await signIn(user);
        return response.data;
    })


const initialState: IAuth = {
    isLoggedIn: false,
    user: null,
    isLoaded: false,
    error: undefined
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.isLoggedIn = false
            state.user = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signInAsync.pending, (state) => {
                state.isLoaded = true;
            })
            .addCase(signInAsync.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoaded = false;
                state.isLoggedIn = true;
            })
            .addCase(signInAsync.rejected, (state, action) => {
                state.isLoaded = false;
                state.error = action.error.message
            });
    },
})

export const {logout} = authSlice.actions

export default authSlice.reducer