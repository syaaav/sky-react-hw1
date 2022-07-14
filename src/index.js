import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from "./App";
// import App from './hw2/12'
// import MinMax from './hw3/2'
// import ReacTimer from './hw4/1'
// import Clock from './hw4/2'
// import PomodoroTracker from './hw4/3'
// import App from './hw5/2'
import MinMax from './hw5/3.2'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <MinMax min={1} max={30} />
    {/* <ReacTimer /> */}
    {/* <Clock />  */}
    {/* <PomodoroTracker /> */}
  </React.StrictMode>
)

reportWebVitals()
