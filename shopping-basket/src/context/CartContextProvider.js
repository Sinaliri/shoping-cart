import React, { createContext, useReducer } from "react";

const initialstate = {
  selectedItems: [],
  itemCounter: 0,
  checkOut: false,
  total: 0,
};
const CartReducer = (state, action) => {
  console.log(state)
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
      };
    case "REMOVE-ITEM": {
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
      };
    }
    case "INCREASE": {
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      return {
        ...state,
      };
    }
    case "DECREASE": {
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexD].quantity--;
      return {
        ...state,
      };
    }
    case "CHECKOUT": {
      return {
        selectedItems: [],
        itemCounter: 0,
        total: 0,
        checkOut: true,
      };
    }
    case "CLEAR": {
      return {
        selectedItems: [],
        itemCounter: 0,
        total: 0,
        checkOut: false,
      };
    }
    default:
      return state;
  }
};
export const CartContext = createContext();
const CartContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(CartReducer, initialstate);
  return <CartContext.Provider value={{state:state,dispatch:dispatch}}>
    {children}
  </CartContext.Provider>;
};

export default CartContextProvider;
