import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isLoggedIn: false, idToken: '', createAccount: false, profile: false };

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
        },
        autoLogin(state){
            state.isLoggedIn = true;
        },
        toggleProfile(state){
            state.profile = !state.profile;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice;