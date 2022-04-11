
import React, { FormEvent, useState } from 'react'
import { useAuth } from '../../Context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

export default function Login() {
	const [ loginFormEmailInput, setLoginFormEmailInput ] = useState<string>('');
	const [ loginFormPasswordInput, setLoginFormPasswordlInput ] = useState<string>('');
	const [ error, setError ] = useState<string>();
	const [ loading, setLoading ] = useState<boolean>(false);
	const { login } = useAuth();
	const navigate = useNavigate();
	
	const handleLoginFormChange = (e: { target: { value: React.SetStateAction<string> } },inputFeild: string) => {
			if(inputFeild === 'email') {
				setLoginFormEmailInput(e.target.value)
				return
			}
			setLoginFormPasswordlInput(e.target.value)
		}

	const handleLoginFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
			e.preventDefault()
			try {
				setError('')
				setLoading(true)
				await login(loginFormEmailInput, loginFormPasswordInput)
				navigate('/')
			} catch(error) {
				setError('Email or password is incorrect')
			}
			setLoading(false)
		}
	
	return (
		<div className='login'>
			<div className='login-head'>
				<h2>Sign In</h2>
				{error && <h2>{error}</h2>}
			</div>
			<form className='login-form' name='Login form' onSubmit={handleLoginFormSubmit}>
				<div className='txt-feild'>
					<label>Email
						<input
							type='email'
							value={loginFormEmailInput}
							onChange={(event) => handleLoginFormChange(event, 'email')}
							required
						/>
					</label>
				</div>
				<div className='txt-feild'>
					<label>Password
						<input
							type='password'
							value={loginFormPasswordInput}
							onChange={(event) => handleLoginFormChange(event, 'password')}
							required
						/>
					</label>
				</div>
				<button className='submit-button' type='submit' disabled={loading}>Login</button>
			</form>
			<div>
				<p className='switch'>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
			</div>
		</div>
	)
}
