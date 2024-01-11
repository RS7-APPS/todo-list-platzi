import { TodoIcon } from './'

export default function DeleteIcon({ onDelete }) {
    return <TodoIcon type='delete' color='gray' onClick={onDelete} /> 
}