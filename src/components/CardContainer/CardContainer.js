import React from 'react';
import PropTypes from 'prop-types';
import PeopleCard from '../Cards/People/PeopleCard';
import PlanetCard from '../Cards/Planets/PlanetCard';
import VehicleCard from '../Cards/Vehicles/VehicleCard';

const CardContainer = ( { cardData, handleClick } ) => {
  if (cardData) {
    const cards = cardData.map((card, index) => {
      if (card.birth_year) {
        return (
          <PeopleCard info={card} key={index} handleClick={handleClick}/>
        )
      } else if (card.climate) {
        return (
          <PlanetCard info={card} key={index} handleClick={handleClick}/>
        )
      } else {
        return (
          <VehicleCard info={card} key={index} handleClick={handleClick}/>
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
