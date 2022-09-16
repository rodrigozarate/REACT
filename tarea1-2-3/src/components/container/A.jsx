import React from 'react';
import { Contacto } from '../../models/contacto.class';
import PropTypes from 'prop-types';
import B from '../pure/B';

const A = () => {

	const contacto = new Contacto('Felix', 'Gato', 'felix@gato.com', true);

	return (
		<div>
			<h1>Contacto</h1>
			<p>Nombre: { contacto.nombre }</p>
			<p>Apellido: { contacto.apellido }</p>
			<p>Email: { contacto.email }</p>
			<B contacto = { contacto }></B>
		</div>
	);
}

A.propTypes = {
	nombre: PropTypes.string,
	apellido: PropTypes.string,
	email: PropTypes.string,
	conectado: PropTypes.bool,
}

export default A;
