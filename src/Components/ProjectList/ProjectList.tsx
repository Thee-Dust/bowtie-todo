import React from 'react'
import { TodoList } from '../../Utilities/interface'
import Project from '../Project/Project';

export default function ProjectList({ todos }: { todos: TodoList[] }) {

	// //if user has no projects then message will appear
	// let projectCards: string | JSX.Element[] = 'No Projects yet, Add a project';
	// //when user adds a project it will map over state
	// if(todos.length) {
	// 	projectCards = todos.map((project) => {
	// 		return (
	// 			<Project 
	// 			key={project.id}
	// 			id={project.id}
	// 			name={project.projectName}
	// 			projectTodos={project.projectTodos}
	// 			/>
	// 		)
	// 	})
	// }

	// return (
	// 	<div>
	// 		{projectCards}
	// 	</div>
	// )
}
