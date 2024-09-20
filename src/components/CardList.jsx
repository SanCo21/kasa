
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from './Card';

const CardList = ({ cardsArray }) => {  

  return (
    <div className="card-list">
      {cardsArray.map((card) => (
      <Link to={`/logement/${card.id}`} key={card.id}>
          <Card
            image={card.cover}
            title={card.title}
          />
        </Link>
      ))}
    </div>
  );
}

CardList.propTypes = {
  cardsArray: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      // description: PropTypes.string,
  })).isRequired,
};


export default CardList;