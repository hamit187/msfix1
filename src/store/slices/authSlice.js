import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isLoggedIn: false, idToken: '', createAccount: false };

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state, action){
            state.idToken = action.payload;
            state.isLoggedIn = true;
        },
        logout(state){
            state.isLoggedIn = false;
        },
        switchForm(state){
            state.createAccount = !state.createAccount;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice;