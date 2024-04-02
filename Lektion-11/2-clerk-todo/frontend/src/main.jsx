import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import RootLayout from './layouts/root-layout'
import IndexPage from './pages'
import AuthLayout from './layouts/auth-layout'
import SignInPage from './pages/sign-in'
import SignUpPage from './pages/sign-up'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <IndexPage />
      },
      {
        path: 'auth',
        element: <AuthLayout />,
        children: [
          {
            path: 'sign-in',
            element: <SignInPage />
          },
          {
            path: 'sign-up',
            element: <SignUpPage />
          },
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
