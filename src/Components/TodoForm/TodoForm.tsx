import React, { FormEvent, useState } from 'react'

export default function TodoForm({ addTodoProject }: { addTodoProject: (projectName: string) => void }) {
	const [ todoFormInput, setTodoFormInput ] = useState<string>('');

	const updateTodoFormInput = (event: { target: { value: React.SetStateAction<string> } }) => {
		setTodoFormInput(event.target.value)
	}

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		addTodoProject(todoFormInput)
		setTodoFormInput('')
	}

	return (
		<form name='TodoForm' onSubmit={handleSubmit}>
			<input type="text" placeholder='Add a todo project' value={todoFormInput} onChange={updateTodoFormInput} />
			<button type='submit' disabled={!todoFormInput.trim()}>Add Project</button>
		</form>
	)
}
