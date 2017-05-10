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
    this.makeAPICalls()
  }

  makeAPICalls() {
    const test = fetch(this.props.info.homeworld)
      .then(response => response.json())
        .then(info => {
          console.log(info)
          return info
        })

    const test2 = fetch(this.props.info.species)
      .then(response => response.json())
        .then(info => {
          console.log(info);
          return info
        })
    Promise.all([test, test2]).then(values => {
        this.setState({homeworld: values[0].name, homeworldPopulation: values[0].population, species: values[1].name, language: values[1].language})
    })
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
