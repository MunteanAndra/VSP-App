import { createSlice } from '@reduxjs/toolkit';

const defaultCartState = {
    items: [],
    totalAmount: 0,
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
                    quantity: +existingCartItem.quantity + +action.payload.quantity
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItems = [...state.items, action.payload];
            }

            const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.quantity;

            return {
                ...state,
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            };

        },

        addItemInCart(state, action)
        {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                });
            } else {
                existingItem.quantity++;
            }
        },

        removeItemFromCart(state,action){
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
            }
        }
    }
});

export const { add, removeItemFromCart, addItemInCart } = cartSlice.actions;

export const itemsSelector = state =>
    state.cart.items;

export const totalAmountSelector = state =>
    state.cart.items.reduce((totalAmount, item) => totalAmount + item.price * item.quantity, 0);

export const totalNumberOfItems = state =>
    state.cart.items.reduce((curNumber, item) =>
       curNumber + +item.quantity, 0);

export const totalPricePerItem = ( state, itemId) => {
    const item = state.cart.items.find(item => item.id === itemId);
    return item.price * item.quantity;
}

export default cartSlice.reducer;


