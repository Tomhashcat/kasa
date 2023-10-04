import { useEffect, useState } from 'react';
import BannerHome from '../../components/Banner/Banner';
import Card from '../../components/Card/Cards';
import { Link } from 'react-router-dom';
import "./Home.scss";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/logements.json')
    .then((response) => response.json())
    .then((data) => setData(data));
  }, []);

  console.log(data);


  return (
    <>
     <BannerHome />
      <div className="cards-container">
        {data.map((appart, id) => (
          <div className="card_logement" key={id}>
            <Link className="link_card_logement" to={`/logement/${appart.id}`}>
              <Card cover={appart.cover} title={appart.title} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
