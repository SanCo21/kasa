import PropTypes from 'prop-types';
import Card from './Card';

function CardList({ cardsArray }) {
    return (
        <div className="card-list">
            {cardsArray.map((card) => (
                <Card 
                    key={card.id}
                    image={card.cover}
                    title={card.title}
                />
            ))}
        </div>
    );
}

CardList.propTypes = {
    cardsArray: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
    })).isRequired,
};


export default CardList;