import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/Pages/Home.jsx';
import About from './assets/Pages/About.jsx';
import Blog from './assets/Pages/Blog.jsx';
import Contact from './assets/Pages/Contact.jsx';
import Service from './assets/Pages/Service.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
        
      },
      {
        path:"/blogs",
        element:<Blog/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
       path:"/contact",
       element:<Contact/>
      },
      {
        path:"/service",
        element:<Service/>
      },
     
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
