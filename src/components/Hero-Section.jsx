import PropTypes from 'prop-types';


const Banner = ({ title, image}) => (
    <div className="hero-section" style={{backgroundImage: `url(${image})`}}>
        <div className="overlay"></div>
        <h1>{title}</h1>
    </div>  
  
);

Banner.propTypes = {
title: PropTypes.string,
image: PropTypes.string.isRequired
};

export default Banner;