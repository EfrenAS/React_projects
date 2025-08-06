import { Toaster } from 'sonner'
import './App.css'
import { ListOfUsers } from './components/ListOfUsers'
import { NewUser } from './components/NewUser'

function App() {
	return (
		<>
			<ListOfUsers />
			<NewUser />
			<Toaster richColors />
		</>
	)
}

export default App
