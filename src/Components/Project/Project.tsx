import React from 'react'
import { ProjectTodos } from '../../Utilities/interface'
import EditableText from '../EditableText/EditableText'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default function Project({ id, name, projectTodos, updateProjectName, removeProject }: { id: number, name: string, projectTodos: ProjectTodos[] | [], updateProjectName: (id: number, name: string) => void, removeProject: (id: number) => void }) {

	const updateName = (newName: string) => {
		updateProjectName(id, newName);
	}

	const deleteProject = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()
		removeProject(id)
	}

	return (
		<div>
			<EditableText text={name} updateName={updateName}/>
			<button onClick={event => deleteProject(event)}><DeleteOutlineOutlinedIcon /></button>
		</div>
	)
}
