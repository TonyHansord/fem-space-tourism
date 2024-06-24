import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/home.jsx'
import Crew from './pages/crew.jsx'
import Destination from './pages/destination.jsx'
import Technology from './pages/technology.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'crew',
        element: <Crew />
      },
      {
        path: 'destination',
        element: <Destination />
      },
      {
        path: 'technology',
        element: <Technology />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
