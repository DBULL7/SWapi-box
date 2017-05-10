import React, { Component } from 'react';
import Favorites from '../Favorites/Favorites';
import CardContainer from '../CardContainer/CardContainer';
import Sidebar from '../Sidebar/Sidebar';
import FavoritedCards from '../Cards/FavoritedCards/FavoritedCards'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      openingCrawl: {},
      cardData: [],
      favorites: [],
      people: [],
      planets: [],
      vehicles: [],
      peopleButton: 'inactive',
      planetsButton: 'inactive',
      vehiclesButton: 'inactive',
      showFavorites: false
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

  componentWillMount() {
    let array = ['people', 'planets', 'vehicles']
    array.forEach(call => {
      fetch(`http://swapi.co/api/${call}/`)
        .then((response) => response.json())
          .then(json => {
            this.setState({
              [call]: json.results
            });
          });
    })
  }


  findInfo(e) {
    const description = e.currentTarget.textContent;
    this.setState({cardData: this.state[description], showFavorites: false })
  }

  handleButtonClass(e) {
    let button = e.currentTarget.textContent;
    if (button === 'people') {
      this.setState({peopleButton: 'active', planetsButton: 'inactive', vehiclesButton: 'inactive'})
    } else if (button === 'planets') {
      this.setState({peopleButton: 'inactive', planetsButton: 'active', vehiclesButton: 'inactive'})
    } else {
      this.setState({peopleButton: 'inactive', planetsButton: 'inactive', vehiclesButton: 'active'})
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
    } else if (!this.state.favorites.find(val => val.name === index.name)) {
      this.setState({
        favorites: this.state.favorites.concat(index)
      })
    } else {
      this.setState({
        favorites: this.state.favorites
      })
    }
  }

  showFavorites() {
    if (this.state.showFavorites) {
      return (
        <FavoritedCards favorites={this.state.favorites} unfavoriteCard={this.unfavoriteCard.bind(this)}/>
      )
    } else {
      return (
        <CardContainer
          cardData={this.state.cardData}
          handleClick={this.handleFavorites.bind(this)}
        />
      )
    }
  }

  showFavoritesHandleClick() {
    this.setState({showFavorites: !this.state.showFavorites})
  }

  render() {
    return (
      <div className="App">
        <section className='header'>
          <h1>SWAPI-Box</h1>
          <Favorites favorites={this.state.favorites.length} showHideFavorites={this.showFavoritesHandleClick.bind(this)}/>
        </section>
        <section className='controls'>
          <button name='people' className={this.state.peopleButton}
                  onClick={(e) => {this.findInfo(e);
                                  this.handleButtonClass(e)}}>people</button>
          <button name='planets' className={this.state.planetsButton}
                  onClick={(e) => {this.findInfo(e);
                                   this.handleButtonClass(e)}}>planets</button>
          <button name='vehicles' className={this.state.vehiclesButton}
                  onClick={(e) => {this.findInfo(e);
                                  this.handleButtonClass(e)}}>vehicles</button>
        </section>
        <section className='sidebar'>
          <Sidebar {...this.state.openingCrawl}/>
        </section>
        <section className='main'>
          {this.showFavorites()}
        </section>
      </div>
    );
  }
}

export default App;
