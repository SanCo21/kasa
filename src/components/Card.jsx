import PropTypes from 'prop-types';
  
function Card({ image, title }) {
  const isEmptyCard = !image;

  return (
      <div className={`card ${isEmptyCard ? 'card-empty' : ''}`}>
      {!isEmptyCard && <img src={image} alt={title} className="card-image" />}
      <h2 className="card-title">{isEmptyCard ? "Titre de la location" : title}</h2>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;