import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    //cart starts with empty array of products, 0 quantity and total price
    name: 'cart',
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
    /*    removeProduct: (state, action) => {
            let newState = state.cart.filter((product) => {
                return product._id !== action._id;
            });
            return {
                ...state,
                cartOpen: newState.lenght > 0,
                cart: newState,
            }
        }*/
    }, 
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;