import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

import AppUI from './AppUI'

/* const defaultTodos = [
  { text: 'cortar tomate', completed: true},
  { text: 'pelar papa', completed: false},
  { text: 'hacer jugo', completed: true},
  { text: 'LALALALA jeiken', completed: false},
]

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)) */
//localStorage.removeItem('TODOS_V1')

function App() {  
  const {
    item: todos, 
    loading, 
    error, 
    saveItem: setTodos
  } = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = useState('')

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()

      return todoText.includes(searchText)
    }    
  )  

  const completeTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].completed = true
    setTodos(newTodos)
  }

  const deleteTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
 
  return (
    <AppUI 
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export default App
