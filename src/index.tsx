import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './Context/AuthContext';
import { TodoProvider } from './Context/TodoContext';
import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById('root');
if(!container) throw new Error('Failed to find root element');
const root = createRoot(container)

root.render(
  <React.StrictMode>
		<TodoProvider>
			<AuthProvider>
				<Router>
					<App />
				</Router>
			</AuthProvider>
		</TodoProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
