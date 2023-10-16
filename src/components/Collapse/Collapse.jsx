import { useState, useRef, useEffect } from 'react';
import Chevron from '../../assets/images/vectorBas.svg';
import './Collapses.scss';
import PropTypes from 'prop-types';
export default function Collapse(props) {
  const [toggle, setToggle] = useState(false); //  definis le state du toggle (et false par défaut)
  const [heightEl, setHeightEl] = useState(); //  definis le state de la hauteur du collapse

  const toggleState = () => {
    // définis la fonction toggleState qui modifie la valeur toggle au clic
    setToggle(prevToggle => !prevToggle);
  };

  const refHeight = useRef(); //récupère et conserve la valeur de hauteur du collapse déplié

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`); //useEffect s'éxécute au montage du composant, dans ce cas, il définit la hauteur du collapse déplié lors de sa première ouverture et la conserve dans refHeight
  }, []);

  return (
    // affiche le collapse replié par défaut et l'ouvre au clic puis le referme au clic en faisant disparaitre le texte et le style

    <div className={`collapse ${props.Style}`}>
      <div onClick={toggleState} className="collapse__visible">
        <h2>{props.Title}</h2>
        <img
          className={toggle ? 'chevron rotated' : 'chevron'}
          src={Chevron}
          alt="chevron"
        />
      </div>
      <div
        ref={refHeight}
        className={toggle ? 'collapse__toggle animated' : 'collapse__toggle'}
        style={{ height: toggle ? `${heightEl}` : '0px' }}
      >
        <div aria-hidden={toggle ? 'true' : 'false'}>{props.Text}</div>
      </div>
    </div>
  );
}
Collapse.propTypes = {
  Style: PropTypes.string, // Style doit être une chaîne de caractères (optionnel)
  Title: PropTypes.string.isRequired, // Title doit être une chaîne de caractères (obligatoire)
  Text: PropTypes.string // Text doit être une chaîne de caractères 
};






