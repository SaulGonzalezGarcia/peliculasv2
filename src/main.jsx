import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './home/Home.jsx';
import Movies from './movies/movies.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children:[
      {
      path: "/comedia",
      element: <Movies genero="comedia" key="comedia"/>,
      },
      {
        path: "/independientes",
        element: <Movies genero="independientes" key="independientes"/>,
      },
      {
        path: "/cienciaficcion",
        element: <Movies genero="cienciaficcion" key="cienciaficcion"/>,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>,
)
