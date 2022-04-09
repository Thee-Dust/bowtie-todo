import React from 'react'
import { ProjectTodos } from '../../Utilities/interface'
import EditableText from '../EditableText/EditableText'


export default function Project({ id, name, projectTodos, updateProjectName }: { id: number, name: string, projectTodos: ProjectTodos[] | [], updateProjectName: (id: number, name: string) => void }) {

	const updateName = (newName: string) => {
		updateProjectName(id, newName);
	}

	return (
		<div>
			<EditableText text={name} updateName={updateName}/>
		</div>
	)
}
