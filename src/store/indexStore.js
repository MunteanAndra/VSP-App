import { configureStore } from '@reduxjs/toolkit';
import {cartReducer} from "./CartProvider";

const store = configureStore({
    reducer: {
        cartReducer
    }
});

export default store;