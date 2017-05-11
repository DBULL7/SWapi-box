import React from 'react'

const FavoritedCards = ({favorites, unfavoriteCard}) => {
  if (favorites) {
    const cards = favorites.map((card, index) => {
      if (card.species) {
        return (
          <div key={index}
               className='people card'>
            <div className='card-title'>
             <h3>{card.name}</h3>
              <button className='favorited'
                      onClick={() => unfavoriteCard(card)}> &hearts; </button>
            </div>
            <p>Homeworld : {card.homeworld}</p>
            <p>Species : {card.species}</p>
            <p>Population : {card.homeworldPopulation}</p>
            <p>Language : {card.language}</p>
          </div>
        )
      } else if (card.model) {
        return (
          <div key={index} className='vehicle card'>
               <div className='card-title'>
                 <p>{card.name}</p>
                 <button className='favorited'
                         onClick={() => unfavoriteCard(card) }>
                     &hearts;
                  </button>
                </div>
            <p>Model : {card.model}</p>
            <p>Class : {card.vehicle_class}</p>
            <p>Passengers : {card.passengers}</p>
          </div>
        )
      } else {
        return (
          <div key={index}
               className='planets card'>
            <div className='card-title'>
              <h3>{card.name}</h3>
              <button className='favorited'
                onClick={() => unfavoriteCard(card) }> &hearts; </button>

            </div>
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
