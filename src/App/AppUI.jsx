import { TodoCounter } from '../TodoCounter'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
import TodoSearch from '../TodoSearch'
import TodoList from '../TodoList'

function AppUI({
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