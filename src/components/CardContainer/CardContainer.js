import React from 'react';
import PropTypes from 'prop-types'

const CardContainer = ( { cardData } ) => {
  if (cardData) {
    const cards = cardData.map(card => {
      return (
        <p>{card.name}</p>
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
