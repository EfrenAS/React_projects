import { useShoppingCart } from '../hooks/useShoppngCart'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import './Products.css'

export default function Product ({ products }) {
  const { addToShoppingCart, removeFromShoppingCart, shoppingCart } = useShoppingCart()

  const checkProductInShoppingCart = product => {
    return shoppingCart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {
          products.map((product) => {
            const isProductInShoppingCart = checkProductInShoppingCart(product)
            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <strong>{product.title}</strong> - {product.price}
                </div>
                <div>
                  <button
                    style={{ backgroundColor: isProductInShoppingCart ? 'red' : '#09f' }}
                    onClick={() => {
                      isProductInShoppingCart
                        ? removeFromShoppingCart(product)
                        : addToShoppingCart(product)
                    }}
                  >
                    {
                      isProductInShoppingCart
                        ? <RemoveFromCartIcon />
                        : <AddToCartIcon />
                    }
                  </button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}
