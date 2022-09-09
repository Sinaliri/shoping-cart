import React, { createContext, useReducer } from "react";

const initialstate = {
  selectedItems: [],
  itemCounter: 0,
  checkOut: false,
  total: 0,
};
const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD-ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
      }
      case "REMOVE-ITEM":{
        const newSelectedItems=state.selectedItems.filter(item => item.id !== action.payload.id)
        return{
          ...state,
          selectedItems :[...newSelectedItems]
        }
      }
      case "INCREASE":{
        const indexI=state.selectedItems.findeIndex(item => item.id === action.payload.id)
        state.selectedItems[indexI].quantity++;
        return{
          ...state,
          
        }
      }
      case "DECREASE":{
        const indexD=state.selectedItems.findeIndex(item => item.id === action.payload.id)
        state.selectedItems[indexD].quantity--;
        return{
          ...state,
          
        }
      }
      case "CHECKOUT":{
        return{
          selectedItems:[],
          itemCounter:0,
          total:0,
          checkOut:true
        }
      }
      case "CLEAR":{
        return{
          selectedItems:[],
          itemCounter:0,
          total:0,
          checkOut:false
          
        }

      }
    default:
      return state; 
  }
};
const CartContextProvider = () => {
  const [state, dispatch] = useReducer(CartReducer, initialstate);
  const cart = createContext();
  return <div></div>;
};

export default CartContextProvider;
