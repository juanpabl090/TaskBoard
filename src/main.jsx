import './assets/styles/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { LoginProvider } from './context/LoginProvider.jsx'
import DashBoardPage from './pages/userPages/DashBoardPage.jsx'
import DashBoardPageEdit from './pages/userPages/DashBoardPageEdit.jsx'
import LoginPage from './pages/auth/LoginPage.jsx'
import NotFound from './pages/userPages/NotFound.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import RegisterPage from './pages/auth/RegisterPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: '/Register',
    element: (
      <RegisterPage />
    ),
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: '/DashBoardPage',
        element: (
          <DashBoardPage />
        ),
      },
      {
        path: '/DashBoardPageEdit',
        element: (
          <DashBoardPageEdit />
        ),
      }
    ]
  },
  {
    path: '/*',
    element: (
      <NotFound />
    ),
  },
]);

createRoot(document.getElementById('root')).render(
  <LoginProvider>
    <RouterProvider router={router} />
  </LoginProvider>
)
