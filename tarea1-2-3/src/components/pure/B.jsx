import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class'

const B = ({ contacto }) => {

	const [conectado, setConectado] = useState(contacto.conectado);

	const actualizar = () => {
		setConectado(!conectado)
	}

	return (
		<div>
			<button onClick = { actualizar }>
				Actualizar
			</button>
			<h3>
				Contacto { conectado ? 'En Línea' : 'No Disponible' }
			</h3>
		</div>
	);
}

B.propTypes = {
	contacto: PropTypes.instanceOf(Contacto)
};

export default B;
