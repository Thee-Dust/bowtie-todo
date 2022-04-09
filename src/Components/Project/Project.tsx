import React, { useState } from 'react'
import { ProjectTodos } from '../../Utilities/interface'
import EditableText from '../EditableText/EditableText'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Todo from '../Todo/Todo';

export default function Project({ id, name, projectTodos, updateProjectName, removeProject, addTodoToProject }: { id: number, name: string, projectTodos: ProjectTodos[] | [], updateProjectName: (id: number, name: string) => void, removeProject: (id: number) => void, addTodoToProject: (id: number, todo: string) => void }) {

	const [ todoFormInput, setTodoFormInput ] = useState<string>('');

	const updateTodoFormInput = (event: { target: { value: React.SetStateAction<string> } }) => {
		setTodoFormInput(event.target.value)
	}

	const addTodo = () => {
		addTodoToProject(id, todoFormInput)
		setTodoFormInput('')
	}
	
	const updateName = (newName: string) => {
		updateProjectName(id, newName);
	}

	const deleteProject = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()
		removeProject(id)
	}

	let todoCards = null;

	if(projectTodos.length) {
		todoCards = projectTodos.map(todo => {
			return (
				<Todo 
				key={todo.id}
				id={todo.id}
				name={todo.name}
				completed={todo.completed}
				/>
			)
		})
	}

	return (
		<div>
			<EditableText text={name} updateName={updateName}/>
			<button onClick={event => deleteProject(event)}><DeleteOutlineOutlinedIcon /></button>
			{todoCards}
			<form name='todoForm' onSubmit={addTodo}>
				<input type="text" placeholder='Add a todo' value={todoFormInput} onChange={updateTodoFormInput} />
				<button type='submit' disabled={!todoFormInput.trim()}>Add Project</button>
			</form>
		</div>
	)
}
