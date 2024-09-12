import { useState } from 'react';
import PropTypes from 'prop-types';
import leftArrow from '../assets/images/left-arrow.png';
import rightArrow from '../assets/images/right-arrow.png';
import '../styles/Carousel.scss';

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="carousel">
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
      <button onClick={prevSlide} className="carousel-button prev">
        <img src={leftArrow} alt="Previous" />
      </button>
      <button onClick={nextSlide} className="carousel-button next">
        <img src={rightArrow} alt="Next" />
      </button>
      <p className="carousel-counter">{currentIndex + 1} / {pictures.length}</p>
    </div>
  );
};

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;