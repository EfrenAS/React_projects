import { createContext, useReducer } from 'react'
import { shoppingCartInitialState, shoppingCartReducer } from '../reducers/shoppingCart'

export const ShoppingCartContext = createContext()

function useCartReducer () {
  const [state, dispatch] = useReducer(shoppingCartReducer, shoppingCartInitialState)

  const addToShoppingCart = product => dispatch({
    type: 'ADD_TO_SHOPPING_CART',
    payload: product
  })

  const removeFromShoppingCart = product => dispatch({
    type: 'REMOVE_FROM_SHOPPING_CART',
    payload: product
  })

  const clearShoppingCart = () => dispatch({
    type: 'CLEAR_SHOPPING_CART'
  })

  return {
    state,
    addToShoppingCart,
    removeFromShoppingCart,
    clearShoppingCart
  }
}

export default function ShoppingCartProvider ({ children }) {
  const { state, addToShoppingCart, removeFromShoppingCart, clearShoppingCart } = useCartReducer()

  return (
    <ShoppingCartContext.Provider value={
        {
          shoppingCart: state,
          addToShoppingCart,
          clearShoppingCart,
          removeFromShoppingCart
        }
      }
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
