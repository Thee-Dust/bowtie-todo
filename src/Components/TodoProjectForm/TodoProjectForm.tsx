import React, { FormEvent, useState } from 'react'
import './TodoProjectForm.css'

export default function TodoProjectForm({ addTodoProject }: { addTodoProject: (projectName: string) => void }) {
	const [ todoProjectFormInput, setTodoProjectFormInput ] = useState<string>('');

	const updateTodoProjectFormInput = (event: { target: { value: React.SetStateAction<string> } }) => {
		setTodoProjectFormInput(event.target.value)
	}

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		addTodoProject(todoProjectFormInput)
		setTodoProjectFormInput('')
	}

	return (
		<form name='TodoForm' onSubmit={handleSubmit} className='todo-project-form'>
			<input type="text" placeholder='Add a todo project' value={todoProjectFormInput} onChange={updateTodoProjectFormInput} />
			<button type='submit' disabled={!todoProjectFormInput.trim()}>Add Project</button>
		</form>
	)
}
