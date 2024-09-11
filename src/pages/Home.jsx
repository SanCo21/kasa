import { useEffect, useState } from 'react';
import CardList from "../components/CardList";
// import cards from './cardsData';

const cardCount = 6;

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
      fetch("/data/logements.json")
          .then(response => response.json())
          .then(data => setCards(data))
          .catch(error => console.error('Erreur lors du chargement des données:', error));
          setCards(Array(cardCount).fill({ title: '', image: '' }));
  }, []);


    return (
      <div className='main'>
        <div className="home-banner">
        <div className="overlay"></div>
          <h1>Chez vous, partout et ailleurs</h1>
          {/* <img src="src/assets/images/Image_1.png" alt="côte rocheuse en image de fond" /> */}
        </div>
        <CardList cardsArray={cards} />
      </div>
    );
  };
  
export default Home;
