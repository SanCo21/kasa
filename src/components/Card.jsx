// import Card from './CardList';
import PropTypes from 'prop-types';
// import './cards.scss';
  
function Card({ image, title }) {
  return (
      <div className="card">
          <img src={image} alt={title} className="card-image" />
          <div className="card-content">
              <h2 className="card-title">{title}</h2>
          </div>
      </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;