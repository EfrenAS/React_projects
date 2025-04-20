import { CreateTodo } from "./CreateTodo"

interface Props {
  onAddTodo: ({title}: {title: string}) => void
}

export const Header: React.FC <Props> = ({onAddTodo}) => {
  return (
    <header className="header">
      <h1>todo</h1>
      <CreateTodo 
        saveTodo = {onAddTodo}
      />
    </header>
  )
}