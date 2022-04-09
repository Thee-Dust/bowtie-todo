export interface TodoList
{
	projectName: string,
	projectTodos: ProjectTodos[] | null
}

interface ProjectTodos
{
	name: string,
	completed: boolean
}

