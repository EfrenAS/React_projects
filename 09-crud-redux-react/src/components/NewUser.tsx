import { Button, Card, TextInput, Title } from '@tremor/react'
import type { FormEvent } from 'react'
import { useUserActions } from '../hooks/useUserActions'

export function NewUser() {
	const { addUser } = useUserActions()
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const form = event.currentTarget
		const formData = new FormData(form)

		const name = formData.get('name')
		const email = formData.get('email')
		const github = formData.get('github')

		addUser({
			name: name as string,
			email: email as string,
			github: github as string,
		})
		form.reset()
	}

	return (
		<Card className="mt-6">
			<Title className="text-center mb-6">Nuevo Usuario</Title>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<TextInput name="name" placeholder="Nombre" required />
				<TextInput name="email" type="email" placeholder="Email" required />
				<TextInput name="github" placeholder="GitHub" />
				<Button
					type="submit"
					className="w-1/4 mt-6 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
				>
					Guardar
				</Button>
			</form>
		</Card>
	)
}

// Continue to learning React with Redux Toolkit in the next point https://www.youtube.com/watch?v=bEEjuwujbbU&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&index=9 1:36:49 - Manejo de Errores
