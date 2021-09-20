import { createSlice} from "@reduxjs/toolkit";
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addCart: (state, action) => {
            if (state.cart.length===0) {
                state.cart = [{ item: action.payload, number: 1 }];          }
            else {
                const num = state.cart.filter((x) => (x.item.id === action.payload.id)).length;
                if (num === 0) {
                    const newItem = { item: action.payload, number: 1 };
                    state.cart.push(newItem);
                }
                else {
                    const index = state.cart.findIndex((x) => (x.item.id === action.payload.id));
                    state.cart[index].number++;
                }
            }
        },
        removeCart: (state, action) => {
            const index = state.cart.findIndex((x) => (x.item.id === action.payload.id));
            if (state.cart[index].number === 1) {
                state.cart.splice(index,1);
            }
            else {
                state.cart[index].number--;
            }
        },
        resetCart: (state, action) => {
            state.cart = [];
        }
    }
});

export const selectCart = (state) => state.cart.cart;
export const { addCart, resetCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;