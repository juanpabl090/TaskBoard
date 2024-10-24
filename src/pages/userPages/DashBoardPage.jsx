import { useState } from "react";
import TaskComponent from "../../components/TaskComponent";
import BoardPageEdit from "./DashBoardPageEdit";
import dataMockup from '../../DataMockup.json';

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
      <div className="flex flex-col items-center">
        {
          dataMockup.length == 0 ? (
            <h1>No task found</h1>
          ) : (
            dataMockup.map((item) => (
              <button onClick={handleOpen} key={item.idTask}>
                <TaskComponent key={item.idTask} task={item.title} status={item.ETaskStatus} icon={item.iconFileName} />
              </button>
            ))
          )
        }
        <button onClick={handleOpen}>
          <div className="flex pt-5">
            <div className="bg-beige w-96 h-16 rounded-xl flex justify-start items-center px-10" >
              <img src="/src/assets/icons/Add_round_duotone.svg" alt="" className='bg-amber p-1 rounded-xl h-10 w-10' />
              <p className='truncate pl-5'>Add new task</p>
            </div>
          </div>
        </button>
      </div >
      <div>
        <BoardPageEdit isOpen={isOpen} onClose={handleClose} />
      </div>
    </div >
  );
};

BoardPageEdit.defaultProps = {
  isOpen: false,
};

export default DashBoardPage;