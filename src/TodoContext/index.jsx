import { useState, createContext } from 'react'
import { useLocalStorage } from '../App/useLocalStorage'

const TodoContext = createContext()

function TodoProvider({ children }) {
    const {
        item: todos, 
        loading, 
        error, 
        saveItem: setTodos
    } = useLocalStorage('TODOS_V1', [])
    const [searchValue, setSearchValue] = useState('')
    const [openModal, setOpenModal] = useState(false)

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
        <TodoContext.Provider 
            value = {
                {
                    loading,
                    error,
                    completedTodos,
                    totalTodos,
                    searchValue,
                    setSearchValue,
                    searchedTodos,
                    completeTodo,
                    deleteTodo,
                    openModal,
                    setOpenModal
                }   
            }
        >
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider } 