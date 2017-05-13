import React, { Component } from 'react';
import './PeopleCard.css';

class PeopleCard extends Component {
  constructor() {
    super()
    this.state = {
      favorited: false,
      name: '',
      homeworld: '',
      homeworldPopulation: '',
      species: '',
      language: ''
    }
  }

  componentWillMount() {
    if (this.props) {
      this.makeAPICalls()
    }
  }

  // const fetchGet = (url, callback, errorFunction) => {
  //   fetch(url)
  //     .then(response => response.json())
  //       .then(callback);
  //       .catch(errorFunction)
  // }
  //
  // const peopleDataScrub = (homeworld, species, person) => {
  //   {
  //     name: person.info.name,
  //     homeworld: homeworld.name,
  //     homeworldPopulation: homeworld.population,
  //     species: values[1].name,
  //     language: values[1].language
  //   }
  // }

  makeAPICalls() {
    let http = this.props.info.homeworld
    let url = http.substring(4)
    let https = 'https'
    let httpsURL = `${https+url}`
    const p1 = fetch(httpsURL)
      .then(response => response.json())
        .then(info => {
          return info
        });

    let speciesHTTP = this.props.info.species[0]
    let speciesURL = speciesHTTP.substring(4)
    let speciesHTTPS = `${https+speciesURL}`
    const p2 = fetch(speciesHTTPS)
      .then(response => response.json())
        .then(info => {
          return info
        });

    return Promise.all([p1, p2]).then(values => {
        this.setState({
          name: this.props.info.name,
          homeworld: values[0].name,
          homeworldPopulation: values[0].population,
          species: values[1].name,
          language: values[1].language
        });
    });
  }

  handleClick() {
    this.setState({
      favorited: !this.state.favorited
    });

    let allData = {
      name: this.props.info.name,
      homeworld: this.state.homeworld,
      species: this.state.species,
      population: this.state.homeworldPopulation,
      language: this.state.language
    }

    this.props.handleClick(allData, this.state.favorited);
  }

  render() {
    return (
      <div className='people card'>
        <div className='card-title'>
          <h3>{this.state.name}</h3>
          <button name="favoriteButton" className={this.state.favorited === true ? 'favorited' : 'unfavorited'}
                  onClick={() => this.handleClick() }> &hearts; </button>
        </div>
        <p>Homeworld : {this.state.homeworld}</p>
        <p>Species : {this.state.species}</p>
        <p>Population : {this.state.homeworldPopulation}</p>
        <p>Language : {this.state.language}</p>
      </div>
    )
  }
}

export default PeopleCard;
