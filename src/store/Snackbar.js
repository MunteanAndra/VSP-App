import { createSlice } from '@reduxjs/toolkit';

const defaultSnackbarState = {
    open: false,
    text: '',
};

const snackbar = createSlice({
    name: 'snackbar',
    initialState: defaultSnackbarState,
    reducers: {
        openSnackbar(state,action) {
            state.open = true;
            state.text = action.payload;
        },
        closeSnackbar(state) {
            state.open = false;
        },
    },
});

export const {closeSnackbar, openSnackbar} = snackbar.actions;

export const snackBarSelector = state =>
    state.snackbar;

export default snackbar.reducer;