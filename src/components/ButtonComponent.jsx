import PropTypes from 'prop-types';

const ButtonComponent = ({ text = 'Enter', icon, hoverColor, color = 'bg-bright-gray', type = 'button', onClick }) => {
	return (
		<button
			type={type}
			className={`${color} inline-flex items-center px-4 py-2 transition ease-in-out delay-75 hover:${hoverColor}
        text-white text-sm font-medium rounded-2xl hover:-translate-y-0.5 justify-between`}
			onClick={onClick}
		>
			{text}
			<img src={`src/assets/icons/${icon}.svg`} alt="" />
		</button>
	);
};

ButtonComponent.propTypes = {
	text: PropTypes.string,
	icon: PropTypes.string,
	hoverColor: PropTypes.string,
	color: PropTypes.string,
	type: PropTypes.string,
	onClick: PropTypes.func,
};

export default ButtonComponent;