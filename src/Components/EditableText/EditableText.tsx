import React from 'react'
import EdiText from 'react-editext';

export default function EditableText({ text, updateName }: { text: string, updateName: (newName: string) => void }) {

	const handleSave = (val: string) => {
		updateName(val)
	}

	return (
		<EdiText 
		type="text"
		value={text}
		onSave={handleSave}/>
	)
}
