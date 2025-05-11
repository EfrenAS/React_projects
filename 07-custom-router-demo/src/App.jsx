import { lazy, Suspense } from 'react'

import './App.css'

import Route from './components/Route'; // <- Carga estática de un archivo
import Router from './components/Router'
import Page404 from './page/404'
import Search from './page/Search'

const LazyAboutPage = lazy(() => import('./page/About.jsx')) // <- Carga dinámica de un archivo
const LazyHomePage = lazy(() => import('./page/Home.jsx'))

const routes = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: '/search/:query',
    component: Search
  }
]

function App () {
  return (
    <main>
      <Suspense fallback={<div>Loading ...</div>}>
        <Router routes={routes} defaultComponent={Page404}>
          <Route path='/' component={LazyHomePage} />
          <Route path='/About' component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App

// Continue to learn on this point https://www.youtube.com/watch?v=K2NcGYajvY4&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&index=7 minute 01:23:00 - Testing
