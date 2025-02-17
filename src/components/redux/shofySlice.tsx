import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../../type";

interface UserInfoType {
    id: string;
    name: string;
    email: string;
  }

interface InitialState {
    cart: ProductType[],
    favorite: ProductType[],
    userInfo: UserInfoType | null;
}

const initialState: InitialState = {
    cart: [],
    favorite: [],
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

        addTofavorite: (state, action) => {
            const existingProduct = state.favorite.find(item => item.id === action.payload.id);
            if (existingProduct) {
                state.favorite = state.favorite.filter(item => item.id !== action.payload.id);
            } else {
                state.favorite.push(action.payload);
            }
        },

        resetfavorite: (state) => {
            state.favorite = [];
        }
    }
})

export const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    addTofavorite,
    resetfavorite,
    resetCart,
    removeFromCart
} = shofySlice.actions;

export default shofySlice.reducer;
