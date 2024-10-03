import './assets/styles/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.jsx'
import DashBoardPage from './pages/userPages/DashBoardPage.jsx'
import DashBoardPageEdit from './pages/userPages/DashBoardPageEdit.jsx'
import LoginPage from './pages/auth/LoginPage.jsx'
import NotFound from './pages/userPages/NotFound.jsx'
/* import PrivateRoute from './components/PrivateRoute.jsx' */

/* {
    path: '/login',
    element: (
      <PrivateRoute>
        <LoginPage />
      </PrivateRoute>
    ),
  }, */


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <LoginPage />

  },
  {
    path: '/DashBoardPage',
    element: <DashBoardPage />

  },
  {
    path: '/DashBoardPageEdit',
    element: <DashBoardPageEdit />

  },
  {
    path: '/*',
    element: <NotFound />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
