import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isLoggedIn: false, createAccount: false };

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state){
            state.isLoggedIn = true;
        },
        logout(state){
            state.isLoggedIn = false;
        },
        switchFrom(state){
            state.createAccount = !state.createAccount;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice;