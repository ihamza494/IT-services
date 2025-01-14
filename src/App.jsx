import React from 'react'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Mission from "./components/mission-statement/Mission";
import Pricing from './pages/pricing/Pricing';
import Home from"./pages/home/Home";
import AboutUs from "./pages/aboutus/AboutUs";
import './App.css';
import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from './pages/contactUs/Contact';

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/aboutUs",
      element:<AboutUs/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/pricing",
      element:<Pricing/>
    },

  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
