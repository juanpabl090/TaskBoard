import axios from 'axios';
import './assets/styles/App.css'

const handleLogin = async () => {
  try {
    const response = axios.get("http://localhost:8081/login", {
      auth: {
        username: 'admin',
        password: '1234'
      }
    });
    console.log((await response).data);
  } catch (error) {
    console.log(error);
  }
}

function App() {
  return (
    <>
      <button type="button" onClick={handleLogin}>Iniciar sesion</button>
    </>
  )
}

export default App