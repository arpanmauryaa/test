import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
// import Routing from './route/Routing.jsx'
import { BrowserRouter } from 'react-router-dom';
import Login from './components/protectroute/Login.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  // <Login/>

)
