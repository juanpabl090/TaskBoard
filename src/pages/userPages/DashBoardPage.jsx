import { useState } from "react";
import TaskComponent from "../../components/TaskComponent";
import BoardPageEdit from "./DashBoardPageEdit";

const DashBoardPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  }

  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <div>
      <div>
        <div className="flex place-content-center py-5">
          <img src="/src/assets/images/Logo.svg" alt="logo" className="pr-5" />
          <h1 className="pr-5 text-5xl">My Task Board</h1>
        </div>
        <h2 className="flex place-content-center pr-5 text-xl">Tasks to keep organised</h2>
      </div>
      <div className="flex flex-col items-center pt-5">
        <button onClick={handleOpen}>
          <TaskComponent task="tarea de prueba" icon="clock.png" status="Time_atack_duotone.svg" />
        </button>

      </div>

      <div>
        <BoardPageEdit isOpen={isOpen} onClose={handleClose} />
      </div>
    </div>
  );
}

export default DashBoardPage;