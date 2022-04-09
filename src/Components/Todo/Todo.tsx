import React from 'react'

export default function Todo({ id, name, completed }: { id: number, name: string, completed: boolean }) {
	return (
		<>
			<input type="checkbox" checked={completed} />
			<label>name</label>
		</>
	)
}
