import PropTypes from 'prop-types'

function TextAreaLabelComponent({ title, id, placeholder = 'Enter a short description...', name, maxLength = 50, rows = 10 }) {
	return (
		<div className="input flex flex-col w-full static">
			<label
				htmlFor="input"
				className="block text-bright-gray font-semibold text-sm"
			>
				{title}
			</label>
			<textarea
				id={id}
				type=""
				placeholder={placeholder}
				name={name}
				maxLength={maxLength}
				rows={rows}
				style={{ resize: 'none' }}
				className="border-bright-gray focus:border-bright-blue input px-[10px] py-[11px] text-xs bg-[#e8e8e8] border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
			/>
		</div>
	);
}

TextAreaLabelComponent.propTypes = {
	title: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	maxLength: PropTypes.number.isRequired,
	rows: PropTypes.number.isRequired,
}

export default TextAreaLabelComponent