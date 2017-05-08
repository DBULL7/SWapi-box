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
      people: [],
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


  findInfo(e) {
    const description = e.currentTarget.textContent
    fetch(`http://swapi.co/api/${description}/`)
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
          <button onClick={(e) => {this.findInfo(e)}}>people</button>
          <button onClick={(e) => {this.findInfo(e)}}>planets</button>
          <button onClick={(e) => {this.findInfo(e)}}>vehicles</button>
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
