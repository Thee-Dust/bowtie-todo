import React, { useContext, useEffect, useState, ReactNode } from 'react'
import { Todos } from '../Utilities/interface';


type TodoContextType = {
	todos: Todos[];
	addTodoProject: (projectName: string) => void;
	addTodoToProject: (id: number, todo: string) => void;
	updateProjectName: (id: number, name: string) => void;
	updateCompletedTodo: (projectId: number, todoId: number) => void;
	removeProject: (id: number) => void;
	removeTodo: (projectId: number, id: number) => void;
}

const TodoContext = React.createContext<TodoContextType>({} as TodoContextType)

export function useTodo() {
	return useContext(TodoContext)
}

export function TodoProvider({ children }: { children: ReactNode }) {
	const [todos, setTodos] = useState<Todos[]>(() => {
		const savedTodoProjects = localStorage.getItem('todos');
		return savedTodoProjects !== null
			? JSON.parse(savedTodoProjects)
			: []
	});

	useEffect(() => {
		const saveTodosToStorage = () => {
			localStorage.setItem('todos', JSON.stringify(todos));
		}
		saveTodosToStorage()
	}, [todos])

	const addTodoProject = (projectName: string) => {
		setTodos(prevState => [...prevState, { id: prevState.length, projectName: projectName, projectTodos: [] }])
	};

	const addTodoToProject = (id: number, todo: string) => {
		const updatedProjects = todos.map(project => {
			if (project.id === id) {
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
	};

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
	};

	const removeProject = (id: number) => {
		const updatedProjects = todos.filter(project => project.id !== id);
		setTodos(updatedProjects)
	};

	const removeTodo = (projectId: number, todoId: number) => {
		let updatedTodos = todos.map(project => {
			if (project.id === projectId) {
				project.projectTodos.splice(todoId, 1);
			}
			return project
		});
		setTodos(updatedTodos)
	};


	const value = {
		todos,
		addTodoProject,
		addTodoToProject,
		updateProjectName,
		updateCompletedTodo,
		removeProject,
		removeTodo
	}

	return (
		<TodoContext.Provider value={value}>
			{children}
		</TodoContext.Provider>
	)
}
