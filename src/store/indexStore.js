import { configureStore } from '@reduxjs/toolkit';
import cart from "./Cart";
import authentication from './Auth';

const store = configureStore({

    reducer: {cart, authentication}

});

export default store;