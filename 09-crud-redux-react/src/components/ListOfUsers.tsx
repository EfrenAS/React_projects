import {
	Badge,
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
	Title,
} from '@tremor/react'
import { useAppSelector } from '../hooks/store'
import { useUserActions } from '../hooks/useUserActions'
import { IconEdit, IconTrash } from './Icons'

export function ListOfUsers() {
	const users = useAppSelector((state) => state.users)
	const { removeUser } = useUserActions()

	return (
		<>
			<div>
				<h3 className="font-semibold text-gray-900">Users</h3>
				<p className="mt-1 text-sm leading-6 text-gray-600">
					Overview of all registered users within your organization.
				</p>
			</div>
			<Card>
				<Title>
					Usuarios
					<Badge color="green" className="ml-2">
						{users.length}
					</Badge>
				</Title>
				<Table>
					<TableHead>
						<TableRow>
							<TableHeaderCell>ID</TableHeaderCell>
							<TableHeaderCell>Name</TableHeaderCell>
							<TableHeaderCell>Status</TableHeaderCell>
							<TableHeaderCell>Email</TableHeaderCell>
							<TableHeaderCell>GitHub</TableHeaderCell>
							<TableHeaderCell>Acciones</TableHeaderCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{users.map((user) => (
							<TableRow key={user.id as string}>
								<TableCell>{user.id as string}</TableCell>
								<TableCell className="flex items-center gap-3">
									<img
										src={`https://unavatar.io/github/${user.github}`}
										alt={user.name}
										className="w-6 h-6 rounded-full"
									/>
									{user.name}
								</TableCell>
								<TableCell>
									<Badge>{user.status}</Badge>
								</TableCell>
								<TableCell>{user.email}</TableCell>
								<TableCell>{user.github}</TableCell>
								<TableCell className="flex gap-2 justify-center">
									<button type="button">
										<IconEdit />
									</button>
									<button type="button" onClick={() => removeUser(user.id)}>
										<IconTrash />
									</button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Card>
		</>
	)
}

// Continue to learning React with Redux Toolkit in the next point https://www.youtube.com/watch?v=bEEjuwujbbU&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&index=9 27:25
