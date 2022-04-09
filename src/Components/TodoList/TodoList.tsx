import React, { useState } from 'react'
import { TodoList } from '../../Utilities/interface';
import TodoForm from '../TodoForm/TodoForm';
import Project from '../Project/Project';

export default function () {
	const [ todos, setTodos ] = useState<TodoList[]>([]);

	const addTodoProject = (projectName: string) => {
		if(!projectName.trim()) {
			return
		}
		setTodos(prevState => [ ...prevState, { id: prevState.length + 1, projectName: projectName, projectTodos: [] } ])
	}

	const updateProjectName = (id: number, name: string) => {
		let updatedProjectName = todos.map(project => {
			if (project.id === id) {
				project.projectName = name;
			}
			return project
		});
		setTodos(updatedProjectName)
	}

	const removeProject = (id: number) => {
		const updatedProjects = todos.filter(project => project.id !== id);
		setTodos(updatedProjects)
	}



	//if user has no projects then message will appear
	let projectCards: string | JSX.Element[] = 'No Projects yet, Add a project';
	//when user adds a project it will map over state
	if (todos.length) {
		projectCards = todos.map((project) => {
			return (
				<Project
					key={project.id}
					id={project.id}
					name={project.projectName}
					projectTodos={project.projectTodos}
					updateProjectName={updateProjectName}
					removeProject={removeProject}
				/>
			)
		})
	}


	return (
		<div>
			<h1>What are you planning to do today?</h1>
			<TodoForm addTodoProject={addTodoProject} />
			<div>
				{projectCards}
			</div>
		</div>
	)
}
