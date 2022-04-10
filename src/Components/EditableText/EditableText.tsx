import styled from '@emotion/styled';
import React from 'react'
import EdiText from 'react-editext';
import './EditableText.css'

export default function EditableText({ text, updateName }: { text: string, updateName: (newName: string) => void }) {

	const handleSave = (val: string) => {
		updateName(val)
	}

	// Have to use Styled component to style ediText when editing
	const StyledEdiText = styled(EdiText)`
	button {
		border-radius: 4px;
	}
	button[editext = "edit-button"] {
		color: #000;
		border: none;
		background-color: transparent;
		cursor: pointer;
		&:hover{
			background-color: transparent;
		}
		width: 50px;
	}
	button[editext = "save-button"] {
		width: 50px;
    &:hover {
			background: greenyellow;
		}
	}
	button[editext = "cancel-button"] {
    &:hover {
			background: crimson;
			color: #fff;
		}
	}
	input, textarea {
		color: #000;
		font-size: 16px;
		border-radius: 5px;
	}
	div[editext = "view-container"], div[editext = "edit-container"] {
		padding: 15px;
		border-radius: 5px;
		color: #000;
		width: 85%;
	}
`

	return (
		<StyledEdiText 
		type="text"
		value={text}
		onSave={handleSave}
		className='edi-text'
		/>
	)
}
