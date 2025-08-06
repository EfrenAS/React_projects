import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import './index.css'
import { store } from './store'

const rootElement = document.getElementById('root')

if (!rootElement) {
	throw new Error('Failed to find the root element')
}

createRoot(rootElement).render(
	<Provider store={store}>
		<StrictMode>
			<App />
		</StrictMode>
	</Provider>,
)
