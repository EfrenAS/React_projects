import {Todo} from '../types'

interface Props extends Todo {
  onRemoveTodo: (id: number) => void
  onCompletedTodo: (todo: Pick<Todo, 'id' | 'completed'>) => void
}

export const TodoItem: React.FC<Props> = ({id, title, completed, onRemoveTodo, onCompletedTodo}) => {

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>):void => {
    onCompletedTodo({id, completed: event.target.checked})
  }

  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox" 
        checked={completed}
        onChange={handleChangeCheckbox}
      />
      <label>{title}</label>
      <button 
        className="destroy"
        onClick={() => onRemoveTodo(id)}
      ></button>
    </div>
  )
}
