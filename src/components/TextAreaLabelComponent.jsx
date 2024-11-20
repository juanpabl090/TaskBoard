import PropTypes from 'prop-types'

function TextAreaLabelComponent({ title, id, placeholder = 'Enter a short description...', name, maxLength = 50, rows = 10, HtmlFor, onChange }) {
	return (
		<div className="input flex flex-col w-full static">
			<label
				htmlFor={HtmlFor}
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
				onChange={onChange}
				className="border-bright-gray focus:border-bright-blue input px-[10px] py-[11px] text-xs bg-[#e8e8e8] border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
			/>
		</div>
	);
}

TextAreaLabelComponent.propTypes = {
	title: PropTypes.string,
	id: PropTypes.string,
	placeholder: PropTypes.string,
	name: PropTypes.string,
	maxLength: PropTypes.number,
	rows: PropTypes.number,
	HtmlFor: PropTypes.string,
	onChange: PropTypes.func
}

export default TextAreaLabelComponent