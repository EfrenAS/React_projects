import {useState} from 'react'

interface Props {
  saveTodo: ({title}: {title: string}) => void
}

export const CreateTodo: React.FC <Props> = ({saveTodo}) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault()
    saveTodo({title: inputValue})
    setInputValue('')
  }

  return (
    <form onSubmit = {handleSubmit}>
      <input
        className="new-todo"
        value= {inputValue}
        onChange={(event) => { setInputValue(event.target.value) }}
        placeholder="Run at the beach..."
        autoFocus
      />
    </form>
  )
}