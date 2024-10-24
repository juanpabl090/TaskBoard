import PropTypes from 'prop-types';

const ButtonComponent = ({ text = 'Enter', icon, hoverColor, color = 'bg-bright-gray' }) => {
    return (
        <button className={`${color} inline-flex items-center px-4 py-2 transition ease-in-out delay-75 hover:${hoverColor} 
        text-white text-sm font-medium rounded-2xl hover:-translate-y-0.5 justify-between`}>
            {text}
            <img src={`src/assets/icons/${icon}.svg`} alt="" />
        </button>
    );
};

ButtonComponent.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    hoverColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default ButtonComponent;