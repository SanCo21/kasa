import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LogementInfo from '../components/LogementInfo';
import Carousel from '../components/carousel';
import Collapse from '../components/Collapse';

const FicheLogement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    fetch('/data/logements.json')
      .then(response => response.json())
      .then(data => {
        const currentLogement = data.find(item => item.id === id);
        if (!currentLogement) {
          navigate('/error');
        } else {
          setLogement(currentLogement);
        }
      })
      .catch(error => {
        console.error('Error loading data:', error);
        navigate('/error');
      });
  }, [id, navigate]);

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
          <Collapse title="Description" content={<p>{logement.description}</p>} />
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