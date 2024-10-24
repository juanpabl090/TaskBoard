import PropTypes from 'prop-types';

const titleStatus = ['InProgress', 'Complete', 'WontDo'];

const icons = {
	'InProgress': 'Time_atack_duotone.svg',
	'Complete': 'Done_round_duotone.svg',
	'WontDo': 'close_ring_duotone.svg',
};

const TaskComponent = ({ task, icon = 'books.svg', status = 'InProgress' }) => {
	return (
		<div className="flex pt-5">
			<div className={`relative ${titleStatus[0].toLocaleLowerCase() == status.toLocaleLowerCase() ? 'bg-light-yellow' :
				titleStatus[1].toLocaleLowerCase() == status.toLocaleLowerCase() ? 'bg-light-green' : 'bg-light-pink'
				} w-96 h-16 rounded-xl flex justify-around items-center`}>
				<img src={`/src/assets/userIcons/${icon}`} alt={`${icon}`} className='bg-white p-1 rounded-xl h-10 w-10 absolute top-3 left-3' />
				<p className='break-words line-clamp-2 px-5'>{task}</p>
				<img className={`${titleStatus[0].toLocaleLowerCase() == status.toLocaleLowerCase() ? 'bg-amber' :
					titleStatus[1].toLocaleLowerCase() == status.toLocaleLowerCase() ? 'bg-bright-green' : 'bg-bright-red'
					} p-2 flex justify-around items-center rounded-xl absolute top-3 right-3`} src={`/src/assets/icons/${icons[status]}`} alt={`${status}`} />
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