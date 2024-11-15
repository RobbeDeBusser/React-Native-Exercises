import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// function Hello(props){
//   return(
//     <h1>Hello {props.target}!</h1>
//   )
// }

// createRoot(document.getElementById('root')).render(
//   <div>
//     <Hello target="Bono"/>
//     <Hello target="Batman"/>
//     <Hello target="YoshiMan"/>
//     <Hello target="Iron Mathijs"/>
//   </div>
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
