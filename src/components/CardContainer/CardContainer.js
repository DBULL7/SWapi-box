import React from 'react';
import PropTypes from 'prop-types'
import PeopleCard from '../Cards/People/PeopleCard';
import PlanetCard from '../Cards/Planets/PlanetCard';

const CardContainer = ( { cardData } ) => {
  if (cardData) {
    const cards = cardData.map((card, index) => {
      if (card.birth_year) {
        return (
          <PeopleCard info={card} key={index}/>
        )
      } else if (card.climate) {
        return (
          <PlanetCard info={card} key={index}/>
        )
      }
    })
    return (
      <div>
        {cards}
      </div>
    )
  }
}


CardContainer.propTypes = {
  cardData: PropTypes.array
}

export default CardContainer;
