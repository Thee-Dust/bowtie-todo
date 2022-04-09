import React, { useState } from 'react'
import { TodoList } from '../../Utilities/interface';

export default function () {
	const [ todos, setTodos ] = useState<TodoList[]>([]);

	const addTodoProject = (projectName: string) => {
		setTodos(prevState => [ ...prevState, { projectName: projectName, projectTodos: [] } ])
	}


	return (
		<div>
			<h1>What are you planning to do today?</h1>
		</div>
	)
}
