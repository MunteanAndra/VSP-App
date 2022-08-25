import { configureStore } from '@reduxjs/toolkit';
import cart from "./Cart";
import authentication from './Auth';
import snackbar from "./Snackbar";

const store = configureStore({

    reducer: {cart, authentication, snackbar}

});

export default store;