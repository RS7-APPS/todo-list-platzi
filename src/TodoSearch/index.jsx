import { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import './TodoSearch.css'

export default function TodoSearch() {
    const { 
        searchValue, 
        setSearchValue
    } = useContext(TodoContext)

    return (
        <input 
            className='TodoSearch' 
            placeholder='cortar cebolla' 
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value)
            }} />
    )
}