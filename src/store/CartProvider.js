import CartContext from './CartContext';
import { useReducer } from 'react';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

export const cartReducer = (state = defaultCartState, action) => {
    if (action.type === 'ADD') {

        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;

        if(existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: +existingCartItem.amount + +action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = [...state.items, action.item];
        }

        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        return {
            ...state,
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    return state;
};


