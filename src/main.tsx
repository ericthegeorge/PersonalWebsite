import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

//ONLY RUN BY NPM RUN DEV IN TERMINAL
//GO LIVE VSCODE DOES NOT WORK(?) TODO