import { useContext } from 'react'
import { ShoppingCartContext } from '../context/shoppingCart'

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext)
  if (!context) {
    throw new Error('useShoppingCart must be used within a ShoppingCartProvider')
  }
  return context
}
