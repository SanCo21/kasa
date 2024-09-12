import { useState } from 'react';
import PropTypes from 'prop-types';
import arrowIcon from '../assets/images/arrow_back_ios-24px 2.png';

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse">
            <div className="collapse-title" onClick={() => setIsOpen(!isOpen)}>
                <h2>{title}</h2>
                <img src={arrowIcon} alt="bouton de bascule pour afficher/masquer" className={`arrow ${isOpen ? 'open' : ''}`}/>
            </div>
            {isOpen && <div className="collapse-content">{content}</div>}
        </div>
    );
};

Collapse.propTypes = {
title: PropTypes.string.isRequired,
content: PropTypes.string.isRequired,
};



export default Collapse;
