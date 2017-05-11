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
    if (this.props) {
      this.makeAPICalls()
    }
  }

  makeAPICalls() {
    const p1 = fetch(this.props.info.homeworld)
      .then(response => response.json())
        .then(info => {
          return info
        });

    const p2 = fetch(this.props.info.species)
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
      <div className='people'>
        <button className={this.state.favorited === true ? 'favorited' : ''}
                onClick={() => this.handleClick() }> &hearts; </button>
        <h3>{this.state.name}</h3>
        <p>Homeworld : {this.state.homeworld}</p>
        <p>Species : {this.state.species}</p>
        <p>Population : {this.state.homeworldPopulation}</p>
        <p>Language : {this.state.language}</p>
      </div>
    )
  }
}

export default PeopleCard;
