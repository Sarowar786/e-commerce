import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../../type";

interface InitialState {
    cart: ProductType[],
    favourite: ProductType[],
    userInfo: any
}

const initialState: InitialState = {
    cart: [],
    favourite: [],
    userInfo: null
}

export const shofySlice = createSlice({
    name: 'shofy',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.cart.find(item => item.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity = (existingProduct.quantity || 0) + 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },

        increaseQuantity: (state, action) => {
            const existingProduct = state.cart.find(item => item.id === action.payload);
            if (existingProduct) {
                existingProduct.quantity = (existingProduct.quantity || 0) + 1;
            }
        },

        decreaseQuantity: (state, action) => {
            const existingProduct = state.cart.find(item => item.id === action.payload);
            if (existingProduct && existingProduct.quantity! > 1) {
                existingProduct.quantity! -= 1;
            }
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },

        resetCart: (state) => {
            state.cart = [];
        },

        addToFavourite: (state, action) => {
            const existingProduct = state.favourite.find(item => item.id === action.payload.id);
            if (existingProduct) {
                state.favourite = state.favourite.filter(item => item.id !== action.payload.id);
            } else {
                state.favourite.push(action.payload);
            }
        },

        resetFavourite: (state) => {
            state.favourite = [];
        }
    }
})

export const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    addToFavourite,
    resetFavourite,
    resetCart,
    removeFromCart
} = shofySlice.actions;

export default shofySlice.reducer;
