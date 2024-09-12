import { useEffect, useState } from 'react';
import CardList from "../components/CardList";
import Banner from "../components/Banner";
import bannerImage from '../assets/images/Image_1.png';
// import { Link } from 'react-router-dom';
// import Card from "../components/Card";

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/data/logements.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => setCards(data))
    .catch(error => {
      console.error('Error loading data:', error);
      // Empty cards if data loading fails
      setCards(Array(6).fill({ title: 'Titre de la location', image: '' }));
    });
}, []);

    return (
      <div>
        <Banner title="Chez vous, partout et ailleurs" image={bannerImage} />
        <CardList cardsArray={cards} />
      </div>
    );
  };
  
export default Home;
