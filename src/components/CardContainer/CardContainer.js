import React from 'react';
import PropTypes from 'prop-types'
import PeopleCard from '../Cards/People/PeopleCard';

const CardContainer = ( { cardData } ) => {
  if (cardData) {
    const cards = cardData.map((card, index) => {
      return (
        <PeopleCard info={card} key={index}/>
      )
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
