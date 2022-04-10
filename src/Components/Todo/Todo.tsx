import React, { FormEvent } from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default function Todo({ id, name, completed, updateTodo, deleteTodo }: { id: number, name: string, completed: boolean, updateTodo: (todoId: number) => void, deleteTodo: (todoId: number) => void }) {
	
	const handleClick = () => {
		updateTodo(id)
	}

	const removeTodo = (e: FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		deleteTodo(id)
	}
	
	return (
		<>
			<input type="checkbox" defaultChecked={completed} onClick={handleClick}/>
			<label>{name}</label>
			<button onClick={event => removeTodo(event)}><DeleteOutlineOutlinedIcon /></button>
		</>
	)
}
