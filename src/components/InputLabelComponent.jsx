import PropTypes from 'prop-types';

const InputLabelComponent = ({ titleInput, htmlFor, id, type = 'text', name }) => {
	return (
		<div className="input flex flex-col static">
			<label
				htmlFor={htmlFor}
				className="block text-bright-gray font-semibold text-sm"
			>
				{titleInput}
			</label>
			<input
				id={id}
				type={type}
				placeholder="Enter a short description..."
				name={name}
				className="border-bright-gray focus:border-bright-blue input px-[10px] py-[11px] text-xs bg-[#e8e8e8] border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
			/>
		</div>
	);
};

InputLabelComponent.propTypes = {
	titleInput: PropTypes.string.isRequired,
	htmlFor: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};

export default InputLabelComponent;
