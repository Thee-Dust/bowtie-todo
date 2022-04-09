import React from 'react'

export default function Todo({ id, name, completed, updateTodo }: { id: number, name: string, completed: boolean, updateTodo: (todoId: number) => void }) {
	
	const handleClick = () => {
		updateTodo(id)
	}
	
	return (
		<>
			<input type="checkbox" checked={completed} onClick={handleClick}/>
			<label>{name}</label>
		</>
	)
}
