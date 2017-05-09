import React, { Component } from 'react'

class Card extends Component {
  constructor() {
    super()
    this.state = {
      favorited: false
    }
  }

  componentWillMount() {
    this.apiCall(this.props.info.homeworld)
    this.apiCall(this.props.info.species)
  }

  apiCall(url) {
    fetch(url)
      .then(response => response.json())
        .then(info => {
          this.setCardState(info)
        })
  }

  setCardState(info) {
    if (info.climate) {
      console.log(info)
      this.setState({homeworld: info.name, homeworldPopulation: info.population})
    } else {
      this.setState({species: info.name})
    }

  }

  handleClick() {
    this.setState({favorited: !this.state.favorited})
  }

  render() {
    return (
      <div onClick={() => {this.handleClick()}}>
        <h3>{this.props.info.name}</h3>
        <p>Homeworld : {this.state.homeworld}</p>
        <p>Species : {this.state.species}</p>
        <p>Population : {this.state.homeworldPopulation}</p>
      </div>
    )
  }
}

export default Card


// fetch(`${card.homeworld}`)
//  .then(response => response.json())
//    .then(json => {
//        console.log(json.name)
//    })
