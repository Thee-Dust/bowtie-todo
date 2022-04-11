import React, { useEffect, useState } from 'react'
import { Todos } from '../../Utilities/interface';
import TodoProjectForm from '../TodoProjectForm/TodoProjectForm';
import Project from '../Project/Project';
import './TodoList.css'
import Header from '../Header/Header';

export default function TodoList() {
	const [ todos, setTodos ] = useState<Todos[]>(() => {
		const savedTodoProjects = localStorage.getItem('todos');
		return savedTodoProjects !== null
		? JSON.parse(savedTodoProjects)
		: []
	});

	//Save todo data to local storage
	useEffect(() => {
		const saveTodosToStorage = () => {
			localStorage.setItem('todos', JSON.stringify(todos));
		}
		saveTodosToStorage()
	}, [todos])

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

	//update a project or a todo
	const updateProjectName = (id: number, name: string) => {
		let updatedProjectName = todos.map(project => {
			if (project.id === id) {
				project.projectName = name;
			}
			return project
		});
		setTodos(updatedProjectName)
	}

	const updateCompletedTodo = (projectId: number, todoId: number) => {
		let updatedTodos = todos.map(project => {
			if (project.id === projectId) {
				project.projectTodos[todoId].completed = !project.projectTodos[todoId].completed;
			}
			return project
		});
		setTodos(updatedTodos)
	}

	//remove a project or a todo
	const removeProject = (id: number) => {
		const updatedProjects = todos.filter(project => project.id !== id);
		setTodos(updatedProjects)
	}

	const removeTodo = (projectId: number, todoId: number) => {
		let updatedTodos = todos.map(project => {
			if (project.id === projectId) {
				project.projectTodos.splice(todoId, 1);
			}
			return project
		});
		setTodos(updatedTodos)
	}

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
					updateProjectName={updateProjectName}
					removeProject={removeProject}
					addTodoToProject={addTodoToProject}
					updateCompletedTodo={updateCompletedTodo}
					removeTodo={removeTodo}
				/>
			)
		})
	}

	return (
		<>
			<Header />
			<div className='todo-list'>
				<h1 className='welcome-msg'>What are you planning to do today?</h1>
				<TodoProjectForm addTodoProject={addTodoProject} />
				<div className='card-section'>
					{projectCards}
				</div>
			</div>
		</>
	)
}
