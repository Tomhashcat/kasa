import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import Carrousel from '../../components/Carrousel/Carroussel';
import Collapse from '../../components/Collapse/Collapse';
import Host from '../../components/Host/Host';
import Rate from '../../components/Rate/Rate';
import Tag from '../../components/Tag/Tag';

import './Fiche.scss';

const FicheLogement = () => {
  const params = useParams(); //Récupère les paramètres de l'URL
  const navigate = useNavigate(); //Récupère la fonction de navigation

  const [pickedAppart, setPickedAppart] = useState(null);
  const getData = async () => {
    try {
      const response = await fetch('/logements.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const picked = data.find(({ id }) => id === params.id);
      if (picked === undefined) {
        navigate('/404', { state: { message: "Can't get data" } });
      } else {
        setPickedAppart(picked);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      navigate('/404', { state: { message: "Can't get data" } });
    }
  };
  useEffect(() => {
    getData(); // Call getData() on component mount
    // eslint-disable-next-line
  }, []);
  const slidePics = pickedAppart && pickedAppart.pictures;
  const tags = pickedAppart && pickedAppart.tags;
  const equipments = pickedAppart && pickedAppart.equipments;

  let equipList = '';

  if (equipments && equipments.length > 0) {
    equipList = (
      <ul>
        {equipments.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
 
  return (
    pickedAppart && (
      <div key={params.id} className="fiche-container">
        <Carrousel slides={slidePics} />
        <section className="hostInfo-container">
          <div className="title-tags-container">
            <div className="title-container redFont">
              <h1>{pickedAppart.title}</h1>
              <h3>{pickedAppart.location}</h3>
            </div>
            <div className="tags-container">
              {tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          </div>
          <div className="rate-host-container">
            <div className="host-container redFont">
              <Host
                hostName={pickedAppart.host.name}
                hostPic={pickedAppart.host.picture}
              />
            </div>
            <div className="rate-container">
              <Rate score={pickedAppart.rating} />
            </div>
          </div>
        </section>

        <div className="collapse-fiche-container">
          <div className="sizeCol">
            <Collapse
              className="col-Fiche"
              Title="Description"
              Text={pickedAppart.description}
            />
          </div>
          <div className="sizeCol">
            <Collapse
              className="col-Fiche"
              Title="Équipements"
              Text={equipList}
            />
          </div>
        </div>
      </div>
    )
  );
};
FicheLogement.propTypes = {
  // Vous pouvez spécifier les PropTypes pour les props ici

  pickedAppart: PropTypes.object,
  slidePics: PropTypes.array,
  tags: PropTypes.array,
  equipments: PropTypes.array,
  equip: PropTypes.element,
};
export default FicheLogement;
