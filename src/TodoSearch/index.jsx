import './TodoSearch.css'

export default function TodoSearch({ searchValue, setSearchValue }) {

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