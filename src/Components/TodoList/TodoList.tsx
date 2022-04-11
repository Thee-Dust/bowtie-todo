import React from 'react'
import TodoProjectForm from '../TodoProjectForm/TodoProjectForm';
import Project from '../Project/Project';
import './TodoList.css'
import Header from '../Header/Header';
import { useTodo } from '../../Context/TodoContext'

export default function TodoList() {
	const { todos } = useTodo();

	//if user has no projects then message will appear
	let projectCards: string | JSX.Element[] = 'No Projects yet, Add a project';
	//when user adds a project it will map over state
	if (todos.length) {
		projectCards = todos.map(project => {
			return (
				<Project
					key={project.id}
					id={project.id}
					name={project.projectName}
					projectTodos={project.projectTodos}
				/>
			)
		})
	}

	return (
		<>
			<Header />
			<div className='todo-list'>
				<h1 className='welcome-msg'>What are you planning to do today?</h1>
				<TodoProjectForm />
				<div className='card-section'>
					{projectCards}
				</div>
			</div>
		</>
	)
}
