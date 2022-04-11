import React, { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import './SignUp.css'

export default function SignUp() {
	const [ signUpFormEmailInput, setSignUpFormEmailInput ] = useState<string>('');
	const [ signUpFormConfirmPasswordInput, setSignUpFormConfirmPasswordInput ] = useState<string>('')
	const [ signUpFormPasswordInput, setSignUpFormPasswordlInput ] = useState<string>('');
	const [ error, setError ] = useState<string>();
	const [ loading, setLoading ] = useState<boolean>(false);
	const { signUp } = useAuth();
	const navigate = useNavigate();

	const handleSignUpFormChange = (e: { target: { value: React.SetStateAction<string> } }, inputFeild: string) => {
		if (inputFeild === 'email') {
			setSignUpFormEmailInput(e.target.value)
			return
		}
		if (inputFeild === 'confirm-password') {
			setSignUpFormConfirmPasswordInput(e.target.value)
			return
		}
		setSignUpFormPasswordlInput(e.target.value)
	}

	const handleSignUpFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (signUpFormConfirmPasswordInput !== signUpFormPasswordInput) {
			return setError('Passwords do not match')
		}
		try {
			setError('')
			setLoading(true)
			await signUp(signUpFormEmailInput, signUpFormPasswordInput)
			navigate('todos')
		} catch (error) {
			setError('User already has that email')
		}
		setLoading(false)
	}
	return (
		<div className='signup'>
			<div className='signup-head'>
				<h2>Sign Up</h2>
				{error && <h2>{error}</h2>}
			</div>
			<form className='signup-form' name='Signup form' onSubmit={handleSignUpFormSubmit}>
				<div className='txt-feild'>
					<label>Email
						<input
							type='email'
							value={signUpFormEmailInput}
							onChange={(event) => handleSignUpFormChange(event, 'email')}
							required
						/>
					</label>
				</div>
				<div className='txt-feild'>
					<label>Password
						<input
							type='password'
							value={signUpFormPasswordInput}
							onChange={(event) => handleSignUpFormChange(event, 'password')}
							required
						/>
					</label>
				</div>
				<div className='txt-feild'>
					<label>Confirm Password
						<input
							type='password'
							value={signUpFormConfirmPasswordInput}
							onChange={(event) => handleSignUpFormChange(event, 'confirm-password')}
							required
						/>
					</label>
				</div>
				<button disabled={loading} className='submit-button' type='submit'>Sign Up</button>
			</form>
			<div>
				<p className='switch'>Already have an account? <Link to='/login'>Login</Link></p>
			</div>
		</div>
	)
}
