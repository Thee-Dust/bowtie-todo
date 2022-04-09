import React, { useState } from 'react'
import { TodoList } from '../../Utilities/interface';

export default function () {
	const [ todos, setTodos ] = useState<TodoList[]>([]);

	


	return (
		<div>
			<h1>What are you planning to do today?</h1>
		</div>
	)
}
