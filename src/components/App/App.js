import React, { Component } from 'react';
import Favorites from '../Favorites/Favorites';
import CardContainer from '../CardContainer/CardContainer';
import Sidebar from '../Sidebar/Sidebar';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      openingCrawl: {}
    }
  }

  componentDidMount() {
    let index = Math.floor(Math.random() * 7) + 1
    fetch(`http://swapi.co/api/films/${index}`)
      .then((response) => response.json())
        .then(json => {
          const { opening_crawl, title, release_date } = json;
          this.setState({ openingCrawl: { opening_crawl, title, release_date } });
        })
  }


  findPeople() {
    fetch(`http://swapi.co/api/people/`)
      .then((response) => response.json())
        .then(json => {
          console.log(json.results);
        })
  }

  findPlanets() {
    fetch(`http://swapi.co/api/planets/`)
      .then((response) => response.json())
        .then(json => {
          console.log(json.results);
        })
  }

  findVehicles() {
    fetch(`http://swapi.co/api/vehicles/`)
      .then((response) => response.json())
        .then(json => {
          console.log(json.results);
        })
  }


  render() {
    return (
      <div className="App">
        <section className='header'>
          <h1>SWAPI-Box</h1>
          <Favorites />
        </section>
        <section className='controls'>
          <button onClick={() => {this.findPeople()}}>people</button>
          <button onClick={() => {this.findPlanets()}}>planets</button>
          <button onClick={() => {this.findVehicles()}}>vehicles</button>
        </section>
        <section className='sidebar'>
          <Sidebar {...this.state.openingCrawl}/>
        </section>
        <section className='main'>
          <CardContainer />
        </section>
      </div>
    );
  }
}

export default App;
