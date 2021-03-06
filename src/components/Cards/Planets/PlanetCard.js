import React, {Component} from 'react';
import './PlanetCard.css'

class PlanetCard extends Component {
  constructor() {
    super()
    this.state = {
      residents: [],
      favorited: false
    }
  }

  componentWillMount() {
    this.apiCall(this.props.info.residents)
  }

  apiCall(urls) {
    urls.forEach(resident => {
      let url = resident.substring(4)
      let https = 'https'
      let httpsURL = `${https+url}`
      fetch(httpsURL)
      .then(response => response.json())
        .then(resident => {
          this.setState({
            residents: this.state.residents.concat(resident.name)
          });
        });
    });
  }

  handleClick() {
    this.setState({
      favorited: !this.state.favorited
    });

    let allData = {
      name: this.props.info.name,
      terrain: this.props.info.terrain,
      population: this.props.info.population,
      climate: this.props.info.climate,
      residents: this.state.residents
    }

    this.props.handleClick(allData);
  }

  render() {
    return (
      <div className='planets card'>
        <div className='card-title'>
          <h3>{this.props.info.name}</h3>
          <button className={this.state.favorited === true ? 'favorited' : ''}
                  onClick={() => this.handleClick() }> &hearts; </button>
        </div>
        <p>terrain: {this.props.info.terrain}</p>
        <p>population: {this.props.info.population}</p>
        <p>climate: {this.props.info.climate}</p>
        <p>{this.state.residents.join(', ')}</p>
      </div>
    )
  }
}


export default PlanetCard
