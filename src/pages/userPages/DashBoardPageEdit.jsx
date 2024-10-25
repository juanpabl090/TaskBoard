/* eslint-disable react/prop-types */
import ButtonComponent from '../../components/ButtonComponent';
import IconSelector from '../../components/IconSelector';
import InputLabelComponent from '../../components/InputLabelComponent';
import InputStatus from '../../components/InputStatus';
import TextAreaLabelComponent from '../../components/TextAreaLabelComponent';

const BoardPageEdit = ({ isOpen = false, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="flex justify-end fixed inset-0 p-5 bg-bright-gray bg-opacity-60">
      <div className="bg-white rounded-lg p-4 md:w-1/3 h-full sm:w-full overflow-y-auto max-h-screen">
        <div className='flex flex-row justify-between'>
          <h2 className="text-lg font-bold mb-2">Task details</h2>
          <img src='src/assets/icons/close_ring_duotone-1.svg' className='cursor-pointer' onClick={onClose} alt="close" />
        </div>
        <form action="#" method="post">
          <div>
            <InputLabelComponent titleInput='Task Name' />
            <TextAreaLabelComponent title='Description' />
          </div>

          <div>
            <h1 className="flex justify-start">Icon</h1>
            <IconSelector />
          </div>

          <div className="flex flex-col">
            <p>Status</p>
            <div className="lg:grid lg:grid-cols-2 lg:gap-2 sm:flex sm:flex-col">
              <InputStatus titleStatus='Wont do' className="flex-1" />
              <InputStatus titleStatus='Completed' className="flex-1" />
              <InputStatus titleStatus='In Progress' className="flex-1" />
            </div>
          </div>

          <div className='flex gap-2 justify-end '>
            <ButtonComponent text='Trash' icon='Trash' hoverColor='bg-bright-red' />
            <ButtonComponent text='Save' icon='Done_round' hoverColor='bg-bright-green' color='bg-bright-blue' />
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default BoardPageEdit;
