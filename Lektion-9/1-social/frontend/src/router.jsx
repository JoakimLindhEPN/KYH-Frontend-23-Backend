import AuthLayout from "./layouts/auth-layout";
import MainLayout from "./layouts/main-layout";
import RootLayout from "./layouts/root-layout";

import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/auth/login-page";
import RegisterPage from "./pages/auth/register-page";
import FeedPage from "./pages/main/feed-page";


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <FeedPage />
          }
        ]
      },
      {
        path: 'auth',
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
            element: <LoginPage />
          },
          {
            path: 'register',
            element: <RegisterPage />
          }
        ]
      }
    ]
  }
])

export default router