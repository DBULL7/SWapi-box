import React, { Component } from 'react';
import Favorites from '../Favorites/Favorites';
import CardContainer from '../CardContainer/CardContainer';
import Sidebar from '../Sidebar/Sidebar';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
    }
  }

  componentDidMount() {
    let index = Math.floor(Math.random() * 7) + 1
    fetch(`http://swapi.co/api/films/${index}`)
      .then((response) => response.json())
        .then(json => {
          this.setState({ title: json.title, date: json.release_date, crawl: json.opening_crawl });
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
          <button>people</button>
          <button>planets</button>
          <button>vehicles</button>
        </section>
        <section className='sidebar'>
          <Sidebar opening={this.state}/>
        </section>
        <section className='main'>
          <CardContainer />
        </section>
      </div>
    );
  }
}

export default App;
