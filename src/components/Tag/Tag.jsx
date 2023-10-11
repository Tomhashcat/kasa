import React from 'react';
import PropTypes from 'prop-types';

export default function Tag(props) {
	return (
		<div className="tagContainer">
			<span className="tagButton">{props.tag}</span>
		</div>
	);
}

Tag.propTypes = {
	tag: PropTypes.string.isRequired // Le tag doit être une chaîne de caractères et est obligatoire
  };