import { useAuth } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom';
import React from 'react'
import './Header.css'

export default function Header() {
const { signOut } = useAuth();
const navigate = useNavigate();

	const logOut = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		try{
			await signOut();
			navigate('login')
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<header>
			<button onClick={logOut} className='logout'>Sign out</button>
		</header>
	)
}
