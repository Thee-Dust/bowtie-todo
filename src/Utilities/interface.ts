export interface TodoList
{
	projectName: string,
	projectTodos: ProjectTodos[]
}

interface ProjectTodos
{
	name: string,
	completed: boolean
}

