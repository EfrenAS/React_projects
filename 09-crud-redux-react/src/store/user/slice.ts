import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type ramdomID = () => `${string}-${string}-${string}-${string}-${string}`

export type UserId = string | ramdomID

export interface User {
	name: string
	email: string
	github: string
}

export interface UsersWithId extends User {
	id: UserId
	status: string
}

const DEFAULT_STATE: UsersWithId[] = [
	{
		id: '1',
		name: 'John Doe',
		status: 'Active',
		email: 'john.doe@example.com',
		github: 'john-doe',
	},
	{
		id: '2',
		name: 'Jane Smith',
		status: 'Active',
		email: 'jane.smith@example.com',
		github: 'jane-smith',
	},
	{
		id: '3',
		name: 'David Clark',
		status: 'Inactive',
		email: 'david.clark@example.com',
		github: 'david-clark',
	},
	{
		id: '4',
		name: 'Jane Smith',
		status: 'Inactive',
		email: 'jane.smith@example.com',
		github: 'jane-smith',
	},
	{
		id: '5',
		name: 'Mike Johnson',
		status: 'Inactive',
		email: 'mike.johnson@example.com',
		github: 'mike-johnson',
	},
	{
		id: '6',
		name: 'Alice Brown',
		status: 'Inactive',
		email: 'alice.brown@example.com',
		github: 'alice-brown',
	},
]

const initialState: UsersWithId[] = (() => {
	const persistedState = localStorage.getItem('__redux__state__')

	return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE
})()

export const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID()
			return [...state, { id, status: 'Inactive', ...action.payload }]
		},

		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload
			return state.filter((user) => user.id !== id)
		},

		rollbackUser: (state, action: PayloadAction<UsersWithId>) => {
			const isUserAlreadyDefined = state.some(
				(user) => user.id === action.payload.id,
			)
			if (!isUserAlreadyDefined) return [...state, action.payload]
		},
	},
})

export default userSlice.reducer

export const { deleteUserById, addNewUser, rollbackUser } = userSlice.actions
