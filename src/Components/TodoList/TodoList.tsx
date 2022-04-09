import React, { useState } from 'react'
import { ProjectTodos, TodoList } from '../../Utilities/interface';
import TodoProjectForm from '../TodoForm/TodoProjectForm';
import Project from '../Project/Project';

export default function () {
	const [ todos, setTodos ] = useState<TodoList[]>([]);

	// add project or todos
	const addTodoProject = (projectName: string) => {
		setTodos(prevState => [ ...prevState, { id: prevState.length, projectName: projectName, projectTodos: [] } ])
	}

	const addTodoToProject = (id: number, todo: string) => {

		const updatedProjects = todos.map(project => {
			if( project.id === id) {
				const newTodo = {
					id: project.projectTodos.length,
					name: todo,
					completed: false
				};

				project.projectTodos.push(newTodo)
			}
			return project
		});
		setTodos(updatedProjects)
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
					addTodoToProject={addTodoToProject}
				/>
			)
		})
	}


	return (
		<div>
			<h1>What are you planning to do today?</h1>
			<TodoProjectForm addTodoProject={addTodoProject} />
			<div>
				{projectCards}
			</div>
		</div>
	)
}
