import React, { FormEvent } from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useTodo } from '../../Context/TodoContext'
import './Todo.css'

export default function Todo({ id, name, completed, projectId }: { id: number, name: string, completed: boolean, projectId: number }) {
	const { updateCompletedTodo, removeTodo } = useTodo();

	const handleClick = () => {
		updateCompletedTodo(projectId, id)
	}

	const deleteTodo = (e: FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		removeTodo(projectId, id)
	}
	
	return (
		<div className='todo'>
			<label>
				<input type="checkbox" defaultChecked={completed} onClick={handleClick}/>
				{name}
			</label>
			<button onClick={event => deleteTodo(event)}><DeleteOutlineOutlinedIcon /></button>
		</div>
	)
}
