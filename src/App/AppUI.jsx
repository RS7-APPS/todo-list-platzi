import { TodoCounter } from '../TodoCounter'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
import TodoSearch from '../TodoSearch'
import TodoList from '../TodoList'
import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { EmptyTodos } from '../EmptyTodos'

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    return (
        <>
            <TodoCounter completed={completedTodos} total={totalTodos} />
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
            <TodoList>
                {
                    loading && (
                        <>
                            <TodosLoading />
                            <TodosLoading />
                            <TodosLoading />
                        </>   
                    )                 
                }
                {error && <TodosError /> }
                {(!loading && searchedTodos.length == 0) && <EmptyTodos />}
                {
                    searchedTodos.map(
                        (todo, index) => (
                            <TodoItem 
                                key={index} 
                                text={todo.text} 
                                completed={todo.completed}
                                onComplete={() => completeTodo(index)} 
                                onDelete={() => deleteTodo(index)} />
                        )
                    )
                }        
            </TodoList>
            <CreateTodoButton /> 
        </>
    )
}

export default AppUI