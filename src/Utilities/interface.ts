export interface Todos
{
	id: number,
	projectName: string,
	projectTodos: ProjectTodos[]
}

export interface ProjectTodos
{
	id: number,
	name: string,
	completed: boolean
}

