import {TodosList, Todo} from '../types'
import {TodoItem} from './TodoItem'

interface Props {
  todos: TodosList,
  onRemoveTodo: (id: number) => void
  onCompletedTodo: (todo: Pick<Todo, 'id' | 'completed'>) => void
}

export const TodoList: React.FC<Props> = ({todos, onRemoveTodo, onCompletedTodo}) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo: Todo) => (
        <li
          key={todo.id}
          className={`${todo.completed ? 'completed' : ''}`}
        >
          <TodoItem 
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onCompletedTodo={onCompletedTodo}
          />
        </li>
      ))}
    </ul>
  )
}
