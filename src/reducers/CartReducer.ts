import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartProduct, ProductType } from "../interfaces/types";

const initialState : CartProduct = {
    cart : {}
}

export const CartReducer = createSlice({
    name : "cart",
    initialState,
    reducers : {
        increaseQuantity : (state , action : PayloadAction<ProductType>) => {
            const product = action.payload
            if(state.cart[product.id]){
                state.cart[product.id].quantity += 1
            }else{
                state.cart[product.id] = {...product , quantity : 1}
            }
        },
        decreaseQuantity : (state , action : PayloadAction<ProductType>) => {
            const product = action.payload
            if(state.cart[product.id].quantity === 1){
                delete state.cart[product.id]
            }else{
                state.cart[product.id].quantity -= 1
            }
        }
    }
})

export const {increaseQuantity , decreaseQuantity} = CartReducer.actions
export default CartReducer.reducer