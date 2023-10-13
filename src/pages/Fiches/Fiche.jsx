import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import Carrousel from '../../components/Carrousel/Carroussel';
import Collapse from '../../components/Collapse/Collapse';
import Host from '../../components/Host/Host';
import Rate from '../../components/Rate/Rate';
import Tag from '../../components/Tag/Tag';
import axios from 'axios';
import './Fiche.scss';

export default function FicheLogement() {
  const params = useParams(); //Récupère les paramètres de l'URL
  const navigate = useNavigate(); //Récupère la fonction de navigation

  const [pickedAppart, setPickedAppart] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/logements.json');
      const picked = res.data.find(({ id }) => id === params.id);
      res.data.map(() => setPickedAppart(picked));
      if (picked === undefined) {
        navigate('/404', { state: { message: "Can't get data" } }); //renvoi vers la page 404 en cas d'URL de logement invalide
      }
    };
    getData();
    // eslint-disable-next-line
  }, []);
  const slidePics = pickedAppart && pickedAppart.pictures;
  const tags = pickedAppart && pickedAppart.tags;
  const equipments = pickedAppart && pickedAppart.equipments;
  const equip = pickedAppart && (
    <ul className="equipList">
      {equipments.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
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
            <Collapse className="col-Fiche" Title="Équipements" Text={equip} />
          </div>
        </div>
      </div>
    )
  );
}
FicheLogement.propTypes = {
  // Vous pouvez spécifier les PropTypes pour les props ici
  params: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
  pickedAppart: PropTypes.object,
  slidePics: PropTypes.array,
  tags: PropTypes.array,
  equipments: PropTypes.array,
  equip: PropTypes.element,
};
