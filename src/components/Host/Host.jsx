import React from 'react';
import PropTypes from 'prop-types';

export default function Host(props) {
  return (
    <aside className="host-comp">
      <div className="host-name">{props.hostName}</div>
      <div className="hostPicture">
        <img src={props.hostPic} alt={props.id} />
      </div>
    </aside>
  );
}
Host.propTypes = {
  hostName: PropTypes.string.isRequired, // Le nom de l'hôte doit être une chaîne de caractères (obligatoire)
  hostPic: PropTypes.string.isRequired, // L'URL de la photo de l'hôte doit être une chaîne de caractères (obligatoire)
  id: PropTypes.string // L'ID est obligatoire et peut être une chaîne de caractères
};
