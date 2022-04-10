import React, { FormEvent, FormEventHandler, useState } from 'react'
import { ProjectTodos } from '../../Utilities/interface'
import EditableText from '../EditableText/EditableText'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Todo from '../Todo/Todo';

export default function Project({ id, name, projectTodos, updateProjectName, removeProject, addTodoToProject, updateCompletedTodo, removeTodo }: { id: number, name: string, projectTodos: ProjectTodos[] | [], updateProjectName: (id: number, name: string) => void, removeProject: (id: number) => void, addTodoToProject: (id: number, todo: string) => void, updateCompletedTodo: (projectId: number, todoId: number) => void, removeTodo: (projectId: number, todoId: number) => void }) {

	const [ todoFormInput, setTodoFormInput ] = useState<string>('');

	const updateTodoFormInput = (event: { target: { value: React.SetStateAction<string> } }) => {
		setTodoFormInput(event.target.value)
	}

	const addTodo = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		addTodoToProject(id, todoFormInput)
		setTodoFormInput('')
	}
	
	const updateName = (newName: string) => {
		updateProjectName(id, newName);
	}
	
	const updateTodo = (todoId: number) => {
		updateCompletedTodo(id, todoId)
	}

	const deleteProject = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()
		removeProject(id)
	}

	const deleteTodo = (todoId: number) => {
		removeTodo(id, todoId)
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
				updateTodo={updateTodo}
				deleteTodo={deleteTodo}
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
				<button type='submit' disabled={!todoFormInput.trim()}>Add Todo</button>
			</form>
		</div>
	)
}
