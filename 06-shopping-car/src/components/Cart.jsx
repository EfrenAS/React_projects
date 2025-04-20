import { useId } from 'react'
import { useShoppingCart } from '../hooks/useShoppngCart'
import './Cart.css'
import { CartIcon, ClearCartIcon } from './Icons'

function ShoppingCartItem ({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export default function Cart () {
  const cartCheckboxId = useId()
  const { shoppingCart, clearShoppingCart, addToShoppingCart } = useShoppingCart()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckboxId} hidden />
      <aside className='cart'>
        <ul>
          {shoppingCart.map(item => (
            <ShoppingCartItem
              key={item.id}
              {...item}
              addToCart={() => addToShoppingCart(item)}
            />
          ))}
        </ul>
        <button onClick={clearShoppingCart}>
          <ClearCartIcon />
        </button>
      </aside>

    </>
  )
}
