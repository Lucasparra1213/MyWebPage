import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import '../src/assets/styles/Fonts.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </StrictMode>,
)
