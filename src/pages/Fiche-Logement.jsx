import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LogementInfo from '../components/LogementInfo';
import Carousel from '../components/carousel';
import Collapse from '../components/Collapse';

const FicheLogement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    fetch('/data/logements.json')
      .then(response => response.json())
      .then(data => {
        const currentLogement = data.find(item => item.id === id);
        setLogement(currentLogement);
      })
      .catch(error => console.error('Error loading data:', error));
  }, [id]);

  if (!logement) return <div>Loading...</div>;

  return (
    <div>
      <Carousel pictures={logement.pictures} />
      <LogementInfo 
        title={logement.title}
        location={logement.location}
        host={logement.host}
        rating={logement.rating}
        tags={logement.tags}
      />
      <div className="collapse-container">
        <div className="fiche-logement-collapses">
          <Collapse title="Description" content={logement.description} />
          <Collapse title="Équipements" content={
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          } />
        </div>
      </div>
    </div>
  );
};

export default FicheLogement;