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
				<Route index element={
					<PrivateRoute>
						<TodoList />
					</PrivateRoute>
					}
				/>
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
				<Route path='*' element={<Navigate to='login' replace />} />
			</Routes>
			{/* <Header /> */}
    </main>
  );
}

export default App;
