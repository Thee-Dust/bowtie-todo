import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './Context/AuthContext';

const container = document.getElementById('root');
if(!container) throw new Error('Failed to find root element');
const root = createRoot(container)

root.render(
  <React.StrictMode>
		<AuthProvider>
    	<App />
		</AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
