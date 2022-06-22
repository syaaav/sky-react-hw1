import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from "./App";
// import App from './hw2/12'
import MinMax from './hw3/2'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <MinMax min={16} max={20} />
  </React.StrictMode>
)

reportWebVitals()
