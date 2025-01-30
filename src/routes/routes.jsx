import { Navigate } from 'react-router-dom'
import DashBoardPage from '../pages/userPages/DashBoardPage.jsx'
import DashBoardPageEdit from '../pages/userPages/DashBoardPageEdit.jsx'
import LoginPage from '../pages/auth/LoginPage.jsx'
import PrivateRoute from '../components/PrivateRoute.jsx'
import RegisterPage from '../pages/auth/RegisterPage.jsx'
import NotFound from '../pages/userPages/NotFound.jsx'

const routes = [
  {
    path: '/',
    element: <Navigate to="/login" />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/Register',
    element: <RegisterPage />
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: '/',
        element: <DashBoardPage />
      },
      {
        path: '/DashBoardPage',
        element: <DashBoardPage />
      },
      {
        path: '/DashBoardPageEdit',
        element: <DashBoardPageEdit />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export default routes