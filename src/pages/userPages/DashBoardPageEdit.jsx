import PropTypes from 'prop-types';
import ButtonComponent from '../../components/ButtonComponent';
import IconSelector from '../../components/IconSelector';
import InputLabelComponent from '../../components/InputLabelComponent';
import InputStatus from '../../components/InputStatus';
import TextAreaLabelComponent from '../../components/TextAreaLabelComponent';
import { editTask } from '../../services/taskServices';
import { useState } from 'react';

const BoardPageEdit = ({ isOpen = false, onClose, task }) => {
  const [dataTask, setDataTask] = useState({});
  const [selectedIconSrc, setSelectedIconSrc] = useState(null);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataTask(prevState => ({
      ...prevState,
      [name]: value,
      iconFileName: selectedIconSrc
    }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await editTask(token, task.idTask, dataTask);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleIconSelect = (src) => {
    setSelectedIconSrc(src.slice(22));
  };

  return (
    <div className="flex justify-end fixed inset-0 p-5 bg-bright-gray bg-opacity-60">
      <div className="bg-white rounded-lg p-4 md:w-1/3 h-full sm:w-full overflow-y-auto max-h-screen">
        <div className='flex flex-row justify-between'>
          <h2 className="text-lg font-bold mb-2">Task details</h2>
          <img src='src/assets/icons/close_ring_duotone-1.svg' className='cursor-pointer' onClick={onClose} alt="close" />
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <InputLabelComponent titleInput='Task Name' htmlFor='title' name='title' placeholder={task?.title}
              onChange={handleChange} />
            <TextAreaLabelComponent title='Description' htmlFor='description' placeholder={task?.description} HtmlFor='description' name='description' onChange={handleChange} />
          </div>

          <div>
            <h1 className="flex justify-start">Icon</h1>
            <IconSelector onIconSelect={handleIconSelect} />
          </div>

          <div className="flex flex-col">
            <p>Status</p>
            <div className="lg:grid lg:grid-cols-2 lg:gap-2 sm:flex sm:flex-col">
              <InputStatus htmlFor='ETaskStatus' titleStatus='Wont do' className="flex-1" onChange={handleChange} value='WontDo' />
              <InputStatus htmlFor='ETaskStatus' titleStatus='Completed' className="flex-1" onChange={handleChange} value='Complete' />
              <InputStatus htmlFor='ETaskStatus' titleStatus='In Progress' className="flex-1" onChange={handleChange} value='InProgress' />
            </div>
          </div>

          <div className='flex gap-2 justify-end '>
            <ButtonComponent text='Trash' icon='Trash' hoverColor='bg-bright-red' color='bg-bright-gray' />
            <ButtonComponent text='Save' icon='Done_round' hoverColor='bg-bright-green' color='bg-bright-blue' />
          </div>

        </form>
      </div>
    </div>
  );
}

BoardPageEdit.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  task: PropTypes.shape({
    idTask: PropTypes.number.isRequired,
    title: PropTypes.string,
    description: PropTypes.string
  })
};

export default BoardPageEdit;
