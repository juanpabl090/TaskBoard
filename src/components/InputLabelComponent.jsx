import PropTypes from 'prop-types';

const InputLabelComponent = ({
	titleInput,
	htmlFor,
	id,
	type = 'text',
	name,
	placeholder = 'Enter a short description...',
	onChange
}) => {
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
				name={name}
				type={type}
				placeholder={placeholder}
				onChange={onChange}
				className="border-bright-gray focus:border-bright-blue input px-[10px] py-[11px] text-xs bg-[#e8e8e8] border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
			/>
		</div>
	);
};

InputLabelComponent.propTypes = {
	titleInput: PropTypes.string.isRequired,
	htmlFor: PropTypes.string.isRequired,
	id: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default InputLabelComponent;
