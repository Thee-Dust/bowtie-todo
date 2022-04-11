import React, { useContext, useEffect, useState, ReactNode } from 'react'
import { auth } from '../firebase'
import { User, signInWithEmailAndPassword, UserCredential, createUserWithEmailAndPassword } from 'firebase/auth';

type AuthContextType = {
	currentUser: User | null;
	signUp:(
		email: string,
		password: string
	) => void;
	login: (
		email: string,
		password: string
	) => Promise<UserCredential>;
	signOut: () => void;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export function useAuth() {
	return useContext(AuthContext)
}

export function AuthProvider({ children }: { children: ReactNode }) {

	const [currentUser, setCurrentUser] = useState<User | null>(null)

	function signUp(email: string, password: string) {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	function login(email: string, password: string) {
		return signInWithEmailAndPassword(auth, email, password)
	}

	function signOut() {
		return auth.signOut()
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
		})
		return unsubscribe
	}, [])

	const value = {
		currentUser,
		signUp,
		login,
		signOut
	}

	return (
		<AuthContext.Provider value={value}>
			{ children }
		</AuthContext.Provider>
	)
}
