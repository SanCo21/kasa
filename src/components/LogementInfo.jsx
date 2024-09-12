import PropTypes from 'prop-types';
import Rating from './Rating';

const LogementInfo = ({ title, location, host, rating, tags }) => {
  const [firstName, lastName] = host.name.split(' ');

  return (
    <div className="logement-info">
      <div className="left-column">
        <h1>{title}</h1>
        <p>{location}</p>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="right-column">
        <div className="host-info">
          <div className="host-name">
            <p>{firstName}</p>
            <p>{lastName}</p>
          </div>
          <img src={host.picture} alt={host.name} />
        </div>
        <Rating rating={parseInt(rating)} />
      </div>
    </div>
  );
};

LogementInfo.propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired
    }).isRequired,
    rating: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
  };

export default LogementInfo;