import { createSlice } from '@reduxjs/toolkit';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

export const cartSlice = createSlice ({
    name: 'cart',
    initialState : defaultCartState,
    reducers: {
        add(state, action){
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );

            const existingCartItem = state.items[existingCartItemIndex];

            let updatedItems;

            if(existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: +existingCartItem.amount + +action.payload.amount
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItems = [...state.items, action.payload];
            }

            const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.amount;

            return {
                ...state,
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            };

        }
    }
});

export const { add } = cartSlice.actions;

export const itemsSelector = state =>
    state.cart.items;

export const totalAmountSelector = state =>
    state.cart.totalAmount;

export const totalNumberOfItems = state =>
    state.cart.items.reduce((curNumber, item) => {
        return curNumber + +item.amount;
    },0);

export default cartSlice.reducer;


