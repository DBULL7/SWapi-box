import React from 'react'

const FavoritedCards = ({favorites}) => {
  if (favorites) {
    const cards = favorites.map((card, index) => {
      if (card.species) {
        return (
          <div>{card.name}, {card.homeworld}</div>
        )
      } else if (card.model) {
        return (
          <div>{card.name}, {card.model}</div>
        )
      } else {
        return (
          <div>{card.name}, {card.population}</div>
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


export default FavoritedCards
