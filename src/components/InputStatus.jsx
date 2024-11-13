import PropTypes from 'prop-types';

const status = ['in Progress', 'Completed', 'Wont Do'];

const icons = {
	'in Progress': 'Time_atack_duotone.svg',
	'Completed': 'Done_round_duotone.svg',
	'Wont Do': 'close_ring_duotone.svg'
};

const InputStatus = ({ titleStatus = 'In Progress', onChange, htmlFor, value }) => {

	return (
		<label
			htmlFor={htmlFor}
			className="has-[:checked]:bg-white/30 has-[:checked]:text-bright-blue has-[:checked]:ring-bright-blue has-[:checked]:ring-2 cursor-pointer bg-white/40 hover:bg-white/20 w-full h-full md:lg:xl:p-4 p-2 rounded-3xl flex justify-between items-center shadow">
			<div className="flex items-center space-x-5">
				<div className="flex items-center">
					<div className={`flex items-center w-10 h-10 
						${status[0].toLocaleLowerCase() == titleStatus.toLocaleLowerCase() ? 'bg-amber' :
							status[1].toLocaleLowerCase() == titleStatus.toLocaleLowerCase() ? 'bg-bright-green' :
								status[2].toLocaleLowerCase() == titleStatus.toLocaleLowerCase() ? 'bg-bright-red' : 'bg-bright-gray'} justify-center rounded-xl`}
					>
						<img src={`src/assets/icons/
						${titleStatus.toLocaleLowerCase() == status[1].toLocaleLowerCase() ? icons['Completed'] :
								titleStatus.toLocaleLowerCase() == status[2].toLocaleLowerCase() ? icons['Wont Do'] :
									icons['in Progress']
							}`} alt="" />
					</div>
				</div>
				<h2 className="text-lg font-medium">{titleStatus}</h2>
			</div>
			<input
				type="radio"
				name='ETaskStatus'
				value={value}
				className="checked:border-indigo-500 h-5 w-5"
				required
				onChange={onChange}
			/>
		</label >
	);
};

InputStatus.propTypes = {
	titleStatus: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	htmlFor: PropTypes.string.isRequired
};

export default InputStatus;
