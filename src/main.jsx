import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider,Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from './components/Home/Home'
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import User from './components/User/User'
import Github from './components/Github/Github'
import { githubInfoLoader } from './components/Github/Github'
import App from './App'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid/id/:num' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <RouterProvider router={router} />
  </React.StrictMode>,
)
