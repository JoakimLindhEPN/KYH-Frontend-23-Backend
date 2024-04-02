import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import RootLayot from './layouts/root-layout'
import Home from './pages/home'
import MyAccountPage from './pages/my-accont'


const router = createBrowserRouter([
  {
    element: <RootLayot />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/me',
        element: <MyAccountPage />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
