import { configureStore, type Middleware } from '@reduxjs/toolkit'
import { toast } from 'sonner'
import type { UsersWithId } from './user/slice'
import usersReducer, { rollbackUser } from './user/slice'

const persistanceLocalStorageMiddleware: Middleware =
	(store) => (next) => (action) => {
		next(action)
		localStorage.setItem('__redux__state__', JSON.stringify(store.getState()))
	}

const syncWithDatabaseMiddleware: Middleware =
	(store) => (next) => (action) => {
		const { type, payload } = action
		const previousState = store.getState()

		next(action)

		if (type === 'users/deleteUserById') {
			const userIdToRemove = payload

			const userToRemove: UsersWithId = previousState.users.find(
				(user: UsersWithId) => user.id === userIdToRemove,
			)

			fetch(`https://jsonplaceholder.com/users/${userIdToRemove}`, {
				method: 'DELETE',
			})
				.then((res) => {
					if (res.ok) toast.success('User deleted successfully')
				})
				.catch(() => {
					toast.error(`User ${userIdToRemove} cannot deleted`)
					if (userToRemove) store.dispatch(rollbackUser(userToRemove))
				})
		}
	}

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
	middleware: [persistanceLocalStorageMiddleware, syncWithDatabaseMiddleware],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
