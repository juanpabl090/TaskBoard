import PropTypes from 'prop-types';

const TaskComponent = ({ task = 'My Task', icon = 'clock.png', status = 'Time_atack_duotone.svg' }) => {
	return (
		<div className="flex pt-5">
			<div className="bg-light-yellow w-96 h-16 rounded-xl flex justify-around items-center">
				<img src={`/src/assets/icons/${icon}`} alt={`${icon}`} className='bg-white p-1 rounded-xl' />
				<p className='truncate'>{task}</p>
				<div className="bg-amber p-2 flex justify-around items-center rounded-xl">
					<img src={`/src/assets/icons/${status}`} alt={`${status}`} />
				</div>
			</div>
		</div>
	);
}

TaskComponent.propTypes = {
	task: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired
};

export default TaskComponent;