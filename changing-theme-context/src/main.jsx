import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeContextProvider } from './ThemeProvider.jsx'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container);
root.render(
	<ThemeContextProvider>
	<App />
	</ThemeContextProvider>
	);


