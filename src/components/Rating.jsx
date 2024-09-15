import PropTypes from 'prop-types';
import activeStar from './../assets/images/star-active.png';
import inactiveStar from './../assets/images/star-inactive.png'; 

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star) => (
        <img
          key={star}
          src={star <= rating ? activeStar : inactiveStar}
          alt={`${star <= rating ? 'Active' : 'Inactive'} star`}
          className={`star ${star <= rating ? 'star--active' : ''}`}
        />
      ))}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;