import './assets/styles/App.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import DashBoardPage from './pages/userPages/DashBoardPage.jsx'
import DashBoardPageEdit from './pages/userPages/DashBoardPageEdit.jsx'
import LoginPage from './pages/auth/LoginPage.jsx';
import LoginProvider from './context/LoginProvider.jsx';
import NotFound from './pages/userPages/NotFound.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import RegisterPage from './pages/auth/RegisterPage.jsx'

const router = createBrowserRouter([
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
    element: (
      <RegisterPage />
    ),
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
    path: '*',
    element: (
      <NotFound />
    ),
  },
]);


function App() {
  return (
    <LoginProvider>
      <RouterProvider router={router} />
    </LoginProvider>
  );
};

export default App;