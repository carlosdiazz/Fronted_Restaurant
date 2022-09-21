import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import "react-toastify/dist/ReactToastify.css"
import './scss/global.scss'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<BrowserRouter><App /></BrowserRouter>);