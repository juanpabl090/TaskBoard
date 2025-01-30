import './assets/styles/App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginProvider from './context/LoginProvider.jsx'
import routes from './routes/routes.jsx'

const router = createBrowserRouter(routes)

function App() {
  return (
    <LoginProvider>
      <RouterProvider router={router} />
    </LoginProvider>
  )
}

export default App