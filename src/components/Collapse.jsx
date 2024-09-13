import { useState } from 'react';
import PropTypes from 'prop-types';
import arrowIcon from '../assets/images/arrow_back_ios-24px 2.png';

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleToggle = () => {
        if (isOpen) {
            setIsClosing(true);
            setTimeout(() => {
                setIsOpen(false);
                setIsClosing(false);
            }, 200); // Closing duration
        } else {
            setIsOpen(true);
        }
    };

    return (
        <div className={`collapse ${isOpen ? 'open' : ''}`}>
            <div className="collapse-title" onClick={handleToggle} aria-expanded={isOpen}>
                <h2>{title}</h2>
                <img src={arrowIcon} alt="bouton de bascule pour afficher/masquer" 
                className={`arrow ${isOpen ? 'open' : ''} ${isClosing ? 'closing' : ''}`}/>                
            </div>
            <div className={`collapse-content ${isOpen ? 'open' : ''} ${isClosing ? 'closing' : ''}`}>
                {content}
            </div>
        </div>
    );
};



Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
};

export default Collapse;