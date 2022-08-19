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
        },
        logout(state){
            state.isAuthenticated = false;
        }
    },
});

export const authActions= authSlice.actions;

export const authSelector = state =>
    state.authentication.isAuthenticated;

export default authSlice.reducer;