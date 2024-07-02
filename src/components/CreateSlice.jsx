import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : [],

}

const CartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers:{
        addItemToCart(state, action){
            const existingItem = state.cartItems.find(item => item.name === action.payload.name)
            if (existingItem){
                existingItem.quantity += 1
            }
            else{
                state.cartItems.push({...action.payload, quantity:1})
                
            }
            state.totalItemsCount = (state.totalItemsCount || 0) + 1;
        },

        removeItemFromCart(state, action){
            state.cartItems = state.cartItems.filter(item => item.name !== action.payload.name)
        },

        increaseItemQuantity(state, action){
            const itemToIncrease = state.cartItems.find(item=> item.name === action.payload.name)
            if (itemToIncrease){
                itemToIncrease.quantity += 1
            }
        },

        decreaseItemQuantity(state, action){
            const itemToDecrease = state.cartItems.find(item => item.name === action.payload.name)
            if (itemToDecrease && itemToDecrease.quantity > 1){
                itemToDecrease.quantity -= 1
            }
        },

        clearItems(state){
            state.cartItems = []
        }
    }
})

export const {
    addItemToCart,
    removeItemFromCart,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearItems
} = CartSlice.actions
export default CartSlice.reducer
