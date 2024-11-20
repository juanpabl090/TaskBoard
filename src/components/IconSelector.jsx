import PropTypes from 'prop-types';
import { useState } from "react";

const IconSelector = ({ onIconSelect }) => {
	// Lista de iconos
	const icons = [
		{ id: 1, src: "/src/assets/userIcons/developer.svg", alt: "Developer Icon" },
		{ id: 2, src: "/src/assets/userIcons/health.svg", alt: "Health Icon" },
		{ id: 3, src: "/src/assets/userIcons/coffee.svg", alt: "Coffee Icon" },
		{ id: 4, src: "/src/assets/userIcons/clock.svg", alt: "Clock Icon" },
		{ id: 5, src: "/src/assets/userIcons/chat.svg", alt: "Chat Icon" },
		{ id: 6, src: "/src/assets/userIcons/books.svg", alt: "Books Icon" },
	];

	// Estado para manejar el ícono seleccionado
	const [selectedIcon, setSelectedIcon] = useState(null);

	// Función para manejar el click en el icono
	const handleIconClick = (icon) => {
		setSelectedIcon(icon.id);
		onIconSelect(icon.src);
	};

	return (
		<div className="flex justify-start items-center space-x-4 py-4">
			{icons.map((icon) => (
				<div
					key={icon.id}
					className={`p-2 rounded-xl cursor-pointer transition-all duration-300 ease-in-out ${selectedIcon === icon.id ? "bg-amber" : "bg-light-gray"
						}`}
					onClick={() => handleIconClick(icon)}
				>
					<img
						src={icon.src}
						alt={icon.alt}
						className="h-10 w-10"
					/>
				</div>
			))}
		</div>
	);
};

IconSelector.propTypes = {
	onIconSelect: PropTypes.func,
}

export default IconSelector;
