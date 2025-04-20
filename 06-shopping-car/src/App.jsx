import { IS_DEVELOPMENT } from './config'
import { products } from './mocks/products.json'

import Cart from './components/Cart'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Products from './components/Products'

import ShoppingCartProvider from './context/shoppingCart'
import useFilters from './hooks/useFilters'

function App () {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)
  return (
    <ShoppingCartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </ShoppingCartProvider>
  )
}

export default App
