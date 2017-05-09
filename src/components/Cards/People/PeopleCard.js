import React, { Component } from 'react';
import './PeopleCard.css';

class PeopleCard extends Component {
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
      this.setState({homeworld: info.name, homeworldPopulation: info.population})
    } else {
      this.setState({species: info.name, language: info.language})
    }

  }

  handleClick() {
    this.setState({favorited: !this.state.favorited});
    let allData = {
      name: this.props.info.name,
      homeworld: this.state.homeworld,
      species: this.state.species,
      population: this.state.homeworldPopulation,
      language: this.state.language
    }
    this.props.handleClick(allData);
  }

  render() {
    return (
      <div className='people'>
        <button className={this.state.favorited === true ? 'favorited' : ''}
                onClick={() => this.handleClick() }> &hearts; </button>
        <h3>{this.props.info.name}</h3>
        <p>Homeworld : {this.state.homeworld}</p>
        <p>Species : {this.state.species}</p>
        <p>Population : {this.state.homeworldPopulation}</p>
        <p>Language : {this.state.language}</p>
      </div>
    )
  }
}

export default PeopleCard;
