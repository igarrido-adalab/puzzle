import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/puzzle">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
)
