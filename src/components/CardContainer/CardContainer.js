import React from 'react';
import PropTypes from 'prop-types'
import Card from '../Card/Card';

const CardContainer = ( { cardData } ) => {
  if (cardData) {
    const cards = cardData.map((card, index) => {
      return (
        <Card info={card} key={index}/>
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
