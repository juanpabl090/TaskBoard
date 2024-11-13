import { jwtDecode } from 'jwt-decode';
import { useContext, useEffect, useState } from "react";
import BoardPageEdit from "./DashBoardPageEdit";
import TaskComponent from "../../components/TaskComponent";
import { getAllTaskById } from '../../services/taskServices';
import { LoginContext } from '../../context/LoginProvider';
import { useNavigate } from 'react-router-dom';

/*  
  TODO: revisar el problema de que no se pueden crear mas usarios porque hay un problema de secuencia de codigo (se crea antes primero el token, y despues el usario o algo asi, por eso me dice que user not found al crear un nuevo usuario) al parecer si registra el nuevo usario, en BD si aparece el usuario creado
*/

const DashBoardPage = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(LoginContext);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [selectTask, setSelectTask] = useState();

  const handleOpen = (task) => {
    setSelectTask(task);
    setIsOpen(true);
  };

  const handleClose = () => {
    setSelectTask(null);
    setIsOpen(false);
  };

  const handleData = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      return await getAllTaskById(token, decoded.jti);
    }
    return [];
  };

  const handleLogOut = () => {
    logOut(navigate);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        handleData()
          .then(dataResponse => {
            setData(dataResponse)
          });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex justify-end mt-4">
        <button className='bg-bright-blue text-white py-2 px-4 rounded' onClick={handleLogOut}>Log Out</button>
      </div>
      <div className="flex flex-col items-center py-5">
        <img src="/src/assets/images/Logo.svg" alt="logo" className="w-24 sm:w-32 lg:w-40 pr-5" />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl pr-5">My Task Board</h1>
        <h2 className="text-lg sm:text-xl text-center">Tasks to keep organised</h2>
      </div>
      <div className="flex flex-col items-center">
        {
          data.length === 0 ? (
            <h1>No task found</h1>
          ) : (
            data.map((item) => (
              <button onClick={() => handleOpen(item)} key={item.idTask} className="w-full max-w-xs">
                <TaskComponent key={item.idTask} task={item.title} status={item.ETaskStatus} icon={item.iconFileName} />
              </button>
            ))
          )
        }
        <button onClick={handleOpen} className="w-full max-w-xs mt-5">
          <div className="bg-beige h-16 rounded-xl flex justify-start items-center px-4 sm:px-10">
            <img src="/src/assets/icons/Add_round_duotone.svg" alt="Add Task" className='bg-amber p-1 rounded-xl h-10 w-10' />
            <p className='truncate pl-3'>Add new task</p>
          </div>
        </button>
      </div>
      <BoardPageEdit isOpen={isOpen} onClose={handleClose} task={selectTask} />
    </div>
  );
};

export default DashBoardPage;