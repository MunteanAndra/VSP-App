import { configureStore } from '@reduxjs/toolkit';
import cart from "./Cart";

const store = configureStore({

    reducer: {cart}

});

export default store;