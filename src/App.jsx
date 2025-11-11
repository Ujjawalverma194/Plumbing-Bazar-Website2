import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Search from './pages/Search'
import Likes from './pages/Likes'
import Notification from './pages/Notification'
import Profile from './pages/Profile'
import Cart from './pages/Cart'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from './pages/Details'
import Modal from "react-modal";
Modal.setAppElement("#root");
function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<>
      <Navbar/>
      <Home/>
      </>
    },
    {
      path:"/about",
      element:<>
      <Navbar/>
      <About/>
      </>
    },
    {
      path:"/products",
      element:<>
      <Navbar/>
      <Products/>
      </>
    },
    {
      path:"/contact",
      element:<>
      <Navbar/>
      <Contact/>
      </>
    },
    {
      path:"/search",
      element:<>
      <Navbar/>
      <Search/>
      </>
    },

    {
      path:"/likes",
      element:<>
      <Navbar/>
      <Likes/>
      </>
    },
    {
      path:"/notification",
      element:<>
      <Navbar/>
      <Notification/>
      </>
    },
    {
      path:"/profile",
      element:<>
      <Navbar/>
      <Profile/>
      </>
    },
    {
      path:"/cart",
      element:<>
      <Navbar/>
      <Cart/>
      </>
    },
    {
      path:"/details/:id",
      element:<>
      <Navbar/>
      <Details/>
      </>
    }
  ])
  return (
    <>
      <RouterProvider router={router} ></RouterProvider>
    </>
  )
}

export default App
