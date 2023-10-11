import React from 'react';
import PropTypes from 'prop-types';
import './Cards.scss';
export default function Card({ cover, title }) {
  return (
    <article className="card-logement">
      <div className="gradient"> </div>
        <img src={cover} alt="location" />
        <div className="card-logement layer">
          <p className="card-logement title">{title}</p>
        </div>
     
    </article>
  );
}
Card.propTypes = {
  cover: PropTypes.string.isRequired, // cover doit être une chaîne de caractères (URL de l'image)
  title: PropTypes.string.isRequired // title doit être une chaîne de caractères
};