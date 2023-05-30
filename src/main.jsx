import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './scss/main.scss';
import { ToastContainer } from 'react-toastify';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer/>
    <App />
  </React.StrictMode>,
)
