import React from 'react';
import PropTypes from 'prop-types'

const CardContainer = ( { cardData } ) => {
  if (cardData) {

    const cards = cardData.map((card, index) => {
      return (
        
        <section key={index}>
          <h3>{card.name}</h3>
          <p>{card.homeworld}</p>
          <p>{card.species}</p>
        </section>
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
