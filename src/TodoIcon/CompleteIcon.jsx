import { TodoIcon } from './'

export default function CompleteIcon({ completed, onComplete }) {
    return (        
        <TodoIcon type='check' color={completed ? 'green' : 'gray'} onClick={onComplete} />
    )
}