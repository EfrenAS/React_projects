import {useState} from 'react'
import {mockTodos} from './mocks/todos'
import {TodoList} from './components/TodoList'
import { FilterValue, Todo } from './types'
import { TODO_FILTERS } from './consts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

export default function App() {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = (id: number):void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({id, completed} : Pick<Todo, 'id' | 'completed'>):void => {
    const newTodos = todos.map((todo) => {
      
      if (todo.id === id) return {...todo, completed}
      
      return todo
    })

    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => setFilterSelected(filter)
  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.length - activeCount
  
  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = ({title}: {title: string}):void => {
    const newTodo = {
      id: todos.length + 1, 
      title, 
      completed: false
    }

    const newTodos = [...todos, newTodo]

    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Header 
        onAddTodo={handleAddTodo}
      />
      <TodoList
        onCompletedTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filteredTodos}
      />
      <Footer 
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllCompleted}
        onFilterChange={handleFilterChange}
      />
    </div>
  )
}
