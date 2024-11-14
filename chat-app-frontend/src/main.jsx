import React from 'react'; // This is necessary if you are using JSX
import { createRoot } from 'react-dom/client'; // For React 18 and above
import './index.css';
import App from './app.jsx'; // Ensure this path is correct

// Get the root element from the HTML
const rootElement = document.getElementById('app');

// Create a root and render the App component
const root = createRoot(rootElement);
root.render(<App />);