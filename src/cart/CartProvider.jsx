import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Create the cart context
const CartContext = createContext();

// Custom hook for accessing the cart context
const useCartContext = () => useContext(CartContext);

// Reducer function for cart actions
// Reducer function for cart actions

const initialState = {
  items: getCart()
}
const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        // Check if the item already exists in the cart
        const existingItem = state.items.find(item => item.id === action.payload.id);
  
        if (existingItem) {
          // Increment the quantity if the item exists
          return {
            ...state,
            items: state.items.map(item =>
              item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
            )
          };
        } else {
          // Add the new item to the cart
          return {
            ...state,
            items: [...state.items, { ...action.payload, quantity: 1 }]
          };
        }
        case "QUANTITY_MINUS":
            return{
                ...state,
                items: state.items.map( item => item.id === action.payload.id ? {...item, quantity: item.quantity - 1} : item)
            }
  
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload)
        };

  
      default:
        return state;
    }
  };
// CartProvider component to wrap the app and provide the cart context
const CartProvider = ({ children }) => {



  const [cartState, dispatch] = useReducer(cartReducer, {items: []});



  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  const quantityMinus = (item) => {
    dispatch({ type: 'QUANTITY_MINUS', payload: item });
  }

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cartState.items))
  },[cartState.items])

  return (
    <CartContext.Provider value={{ cartState, addToCart, removeFromCart,quantityMinus }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCartContext };
