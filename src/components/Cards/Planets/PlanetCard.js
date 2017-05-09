import React, {Component} from 'react'

class PlanetCard extends Component {
  constructor() {
    super()
    this.state = {
      residents: []
    }
  }

  componentWillMount() {
    this.apiCall(this.props.info.residents)
  }

  apiCall(url) {
    url.forEach(resident => {

      fetch(resident)
      .then(response => response.json())
        .then(resident => {
          this.setState({residents: this.state.residents.concat(resident.name)});
        })

    })
  }

  render() {
    return (
      <article>
        <h3>{this.props.info.name}</h3>
        <p>terrain: {this.props.info.terrain}</p>
        <p>population: {this.props.info.population}</p>
        <p>climate: {this.props.info.climate}</p>
        <p>{this.state.residents}</p>
      </article>
    )
  }
}


export default PlanetCard
