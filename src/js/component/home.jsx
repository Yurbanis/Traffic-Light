import React, { useState } from "react";
import '../../styles/index.css';


const Semaforo = () => {
	const [brillar, setBrillar] = useState({ rojo: false, amarillo: false, verde: false });

	const handleClick = (color) => {
		setBrillar((prevState) => ({
			rojo: color === "rojo" ? true : false,
			amarillo: color === "amarillo" ? true : false,
			verde: color === "verde" ? true : false,
		}));
	};

	return (
		<>
			<div className="tronco"></div>
			<div className="semaforo">
				<div
					className={`luz rojo ${brillar.rojo ? "brillar" : ""}`}
					onClick={() => handleClick("rojo")}
				></div>
				<div
					className={`luz amarillo ${brillar.amarillo ? "brillar" : ""}`}
					onClick={() => handleClick("amarillo")}
				></div>
				<div
					className={`luz verde ${brillar.verde ? "brillar" : ""}`}
					onClick={() => handleClick("verde")}
				></div>

			</div>
		</>
	);
};
export default Semaforo;