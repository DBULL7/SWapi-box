import React, { Component } from 'react';
import Favorites from '../Favorites/Favorites';
import CardContainer from '../CardContainer/CardContainer';
import Sidebar from '../Sidebar/Sidebar';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      openingCrawl: {},
      cardData: [],
      favorites: [],
      people: 'inactive',
      planets: 'inactive',
      vehicles: 'inactive'
    }
  }

  componentDidMount() {
    let index = Math.floor(Math.random() * 7) + 1
    fetch(`http://swapi.co/api/films/${index}`)
      .then((response) => response.json())
        .then(json => {
          const { opening_crawl, title, release_date } = json;
          this.setState({
            openingCrawl: { opening_crawl, title, release_date }
          });
        });
  }


  findInfo(e) {
    const description = e.currentTarget.textContent;
    fetch(`http://swapi.co/api/${description}/`)
      .then((response) => response.json())
        .then(json => {
          this.setState({
            cardData: json.results
          });
        });
  }

  handleButtonClass(e) {
    let button = e.currentTarget.textContent;
    if (button === 'people') {
      this.setState({people: 'active', planets: 'inactive', vehicles: 'inactive'})
    } else if (button === 'planets') {
      this.setState({people: 'inactive', planets: 'active', vehicles: 'inactive'})
    } else {
      this.setState({people: 'inactive', planets: 'inactive', vehicles: 'active'})
    }
  }

  unfavoriteCard(index) {
    const favorites = this.state.favorites.filter((val => val.name !== index.name));
    this.setState({
      favorites: favorites
    })
  }

  handleFavorites(index, status) {
    if (status) {
      this.unfavoriteCard(index);
    } else {
      this.setState({
        favorites: this.state.favorites.concat(index)
      })
    }
  }

  render() {
    return (
      <div className="App">
        <section className='header'>
          <h1>SWAPI-Box</h1>
          <Favorites />
        </section>
        <section className='controls'>
          <button className={this.state.people} onClick={(e) => {this.findInfo(e); this.handleButtonClass(e)}}>people</button>
          <button className={this.state.planets} onClick={(e) => {this.findInfo(e); this.handleButtonClass(e)}}>planets</button>
          <button className={this.state.vehicles} onClick={(e) => {this.findInfo(e); this.handleButtonClass(e)}}>vehicles</button>
        </section>
        <section className='sidebar'>
          <Sidebar {...this.state.openingCrawl}/>
        </section>
        <section className='main'>
          <CardContainer
            cardData={this.state.cardData}
            handleClick={this.handleFavorites.bind(this)}
          />
        </section>
      </div>
    );
  }
}

export default App;
