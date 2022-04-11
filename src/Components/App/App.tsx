import React from 'react';
import TodoList from '../TodoList/TodoList';
import { Routes, Route, Navigate } from 'react-router-dom';
// import Header from '../Header/Header';
import './App.css';
import PrivateRoute from '../Routes/PrivateRoute';
import GuestUserRoute from '../Routes/GuestRoute';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

function App() {
  return (
    <main className="App">
			<Routes>
				{/* Private Route sees if a user is signed in. if so, it takes them to TodoList. If not, they go to login */}
				<Route index element={
					<PrivateRoute>
						<TodoList />
					</PrivateRoute>
					}
					/>
					{/* Guest Route sees if a user is signed in. if not, it takes them to component. if so, they go to TodoList component */}
				<Route path='login' element={
					<GuestUserRoute>
						<Login />
					</GuestUserRoute>
					}
				/>
				<Route path='signup' element={
					<GuestUserRoute>
						<SignUp />
					</GuestUserRoute>
					}
				/>
				{/* when a user goes to a url not made they get redirected to login */}
				<Route path='*' element={<Navigate to='login' replace />} />
			</Routes>
    </main>
  );
}

export default App;
