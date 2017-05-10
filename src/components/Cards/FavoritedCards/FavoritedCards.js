import React from 'react'

const FavoritedCards = ({favorites, unfavoriteCard}) => {
  if (favorites) {
    const cards = favorites.map((card, index) => {
      if (card.species) {
        return (
          <div key={index}
               className='people'>
            <button className='favorited'
                    onClick={() => unfavoriteCard(card)}> &hearts; </button>
            <h3>{card.name}</h3>
            <p>Homeworld : {card.homeworld}</p>
            <p>Species : {card.species}</p>
            <p>Population : {card.homeworldPopulation}</p>
            <p>Language : {card.language}</p>
          </div>
        )
      } else if (card.model) {
        return (
          <div key={index}
               className='vehicle'>
            <button className='favorited'
                    onClick={() => unfavoriteCard(card) }> &hearts; </button>
            <p>{card.name}</p>
            <p>Model : {card.model}</p>
            <p>Class : {card.vehicle_class}</p>
            <p>Passengers : {card.passengers}</p>
          </div>
        )
      } else {
        return (
          <div key={index}
               className='planets'>
            <button className='favorited'
                    onClick={() => unfavoriteCard(card) }> &hearts; </button>
            <h3>{card.name}</h3>
            <p>terrain: {card.terrain}</p>
            <p>population: {card.population}</p>
            <p>climate: {card.climate}</p>
            <p>{card.residents}</p>
          </div>
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
