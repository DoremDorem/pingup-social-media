import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import { ClerkProvider } from '@clerk/react'

const publishableKey=import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if(!publishableKey){
  console.log("publishable key missing")
}

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={publishableKey}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ClerkProvider>
)
