import PropTypes from 'prop-types';

const BoardPageEdit = ({ isOpen = false, onClose = false }) => {
  if (!isOpen) return null;

  return (
    <div className="bg-bright-gray fixed inset-0 bg-gray-700 bg-opacity-60 flex justify-end items-center p-5">
      <div className="bg-white rounded-lg p-4 w-2/4 h-full">
        <div className='flex flex-row justify-between'>
          <h2 className="text-lg font-bold mb-2">Task details</h2>
          <img src='src\assets\icons\close_ring_duotone-1.svg' className='cursor-pointer' onClick={onClose} alt="close" />
        </div>
        <form action="#" method="post">
          <div className="input flex flex-col static">
            <label
              htmlFor="input"
              className="text-light-black text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-[#e8e8e8] w-fit"
            >
              Task Name
            </label>
            <input
              id="taskName"
              type="text"
              placeholder="Enter a short description..."
              name="input"
              className="border-bright-gray focus:border-bright-blue input px-[10px] py-[11px] text-xs bg-[#e8e8e8] border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
            />
          </div>
          <div className="input flex flex-col w-full static">
            <label
              htmlFor="input"
              className="text-light-black text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-[#e8e8e8] w-fit"
            >
              Description
            </label>
            <textarea
              id="description"
              type=""
              placeholder="Enter a short description..."
              name="textarea"
              maxLength={50}
              rows={10}
              style={{ resize: 'none' }}
              className="border-bright-gray focus:border-bright-blue input px-[10px] py-[11px] text-xs bg-[#e8e8e8] border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
            />
          </div>
          <div className="flex flex-col">
            <p>Status</p>
            <div className="grid grid-cols-2 gap-2 place-content-end">
              <label className="has-[:checked]:bg-white/30 has-[:checked]:text-indigo-900 has-[:checked]:ring-bright-blue has-[:checked]:ring-2 cursor-pointer bg-white/40 hover:bg-white/20 w-80 h-16 p-4 rounded-3xl flex justify-between items-center shadow">
                <div className="flex items-center space-x-5">
                  <div className="flex items-center">
                    <div className="flex items-center w-10 h-10 bg-bright-green justify-center rounded-xl">
                      <img src="src\assets\icons\Done_round_duotone.svg" alt="" />
                    </div>
                  </div>
                  <h2 className="text-lg font-medium">Completed</h2>
                </div>
                <input
                  type="radio"
                  name="payment"
                  className="checked:border-indigo-500 h-5 w-5"
                />
              </label>
              <label className="has-[:checked]:bg-white/30 has-[:checked]:text-indigo-900 has-[:checked]:ring-bright-blue has-[:checked]:ring-2 cursor-pointer bg-white/40 hover:bg-white/20 w-80 h-16 p-4 rounded-3xl flex justify-between items-center shadow">
                <div className="flex items-center space-x-5">
                  <div className="flex items-center">
                    <div className="flex items-center w-10 h-10 bg-bright-red justify-center rounded-xl">
                      <img src="src\assets\icons\Time_atack_duotone.svg" alt="" className='bg-amber rounded-xl' />
                    </div>
                  </div>
                  <h2 className="text-lg font-medium">In Progress</h2>
                </div>
                <input
                  type="radio"
                  name="payment"
                  className="checked:border-indigo-500 h-5 w-5"
                />
              </label>
              <label className="has-[:checked]:bg-white/30 has-[:checked]:text-indigo-900 has-[:checked]:ring-bright-blue has-[:checked]:ring-2 cursor-pointer bg-white/40 hover:bg-white/20 w-80 h-16 p-4 rounded-3xl flex justify-between items-center shadow">
                <div className="flex items-center space-x-5">
                  <div className="flex items-center h-10 w-10 bg-bright-red justify-center rounded-xl">
                    <img src="src\assets\icons\close_ring_duotone.svg" alt="" />
                  </div>
                </div>
                <h2 className="text-lg font-medium">Won&apos;t do</h2>
                <input
                  type="radio"
                  name="payment"
                  className="checked:border-indigo-500 h-5 w-5"
                />
              </label>
            </div>
          </div>
          <div>
            
          </div>
          <div className='grid grid-cols-2 gap-2 place-content-end py-5'>
            <button className="bg-bright-gray inline-flex items-center px-4 py-2 transition ease-in-out delay-75 hover:bg-bright-red text-white text-sm font-medium rounded-2xl hover:-translate-y-0.5 justify-between">
              Delete
              <img src="src\assets\icons\Trash.svg" alt="" />
            </button>
            <button className="bg-bright-blue inline-flex items-center px-4 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-bright-green  text-white text-sm font-medium rounded-2xl hover:-translate-y-0.5 justify-between">
              save
              <img src="src\assets\icons\Done_round.svg" alt="" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

BoardPageEdit.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BoardPageEdit;
