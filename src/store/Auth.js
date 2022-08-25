import { createSlice } from '@reduxjs/toolkit';

const defaultAuthState = {
    isAuthenticated: false
};

export const authSlice = createSlice({
    name: 'authentication',
    initialState: defaultAuthState,
    reducers: {
        login(state){
            state.isAuthenticated = true;
            localStorage.setItem("token", "1234567")
        },
        logout(state){
            state.isAuthenticated = false;
        }
    },
});

export const {login,logout}= authSlice.actions;

export const authSelector = state =>
    state.authentication.isAuthenticated;

export default authSlice.reducer;