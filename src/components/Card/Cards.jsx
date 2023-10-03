import React from 'react';
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
