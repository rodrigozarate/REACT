import React, { useState,useEffect } from 'react';
import '../styles/clock.scss';

const Clock = () => {

	const initialState = {
		fecha: new Date(),
		nombre: "Rodrigo",
		apellidos: "Zárate Algecira",
		edad: 1,
	};

	const [state, setState] = useState(initialState);

	useEffect(() => {
		const timerID = setInterval (
			() => tick(), 1000
		 );
		return () => {
			clearInterval(timerID);
		};
	})


	return (
		<div>
		<h2>
         Hora Actual:
         {state.fecha.toLocaleTimeString()}
         </h2>
         <h3>{state.nombre} {state.apellidos}</h3>
         <h1>Edad: {state.edad}</h1>
		</div>
	);

	function tick(){
		return setState({
			fecha: new Date,
			nombre: state.nombre,
			apellidos: state.apellidos,
			edad: state.edad + 1,
		})
	 }
}

export default Clock;
