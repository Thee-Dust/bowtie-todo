import React, { FormEvent, useState } from 'react'
import { ProjectTodos } from '../../Utilities/interface'
import EditableText from '../EditableText/EditableText'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Todo from '../Todo/Todo';
import { useTodo } from '../../Context/TodoContext'
import './Project.css'

export default function Project({ id, name, projectTodos }: { id: number, name: string, projectTodos: ProjectTodos[] | []}) {
	const [ todoFormInput, setTodoFormInput ] = useState<string>('');
	const { removeProject, addTodoToProject } = useTodo();

	const updateTodoFormInput = (event: { target: { value: React.SetStateAction<string> } }) => {
		setTodoFormInput(event.target.value)
	}

	const addTodo = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		addTodoToProject(id, todoFormInput)
		setTodoFormInput('')
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
				projectId={id}
				/>
			)
		})
	}

	return (
		<div className='project'>
			<EditableText text={name} projectId={id}/>
			<button onClick={event => deleteProject(event)} className='delete-proj'><DeleteOutlineOutlinedIcon /></button>
			{todoCards}
			<form name='todoForm' className='todo-form' onSubmit={addTodo}>
				<input type="text" placeholder='Add a todo' value={todoFormInput} onChange={updateTodoFormInput} />
				<button type='submit' disabled={!todoFormInput.trim()}>Add Todo</button>
			</form>
		</div>
	)
}
