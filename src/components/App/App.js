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
    fetch('http://swapi.co/api/films/1', {method: 'get'} ).then(response => {
      let test = response.json()
      console.log(test)
    }).catch(error => {
      console.log(error)
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
          <Sidebar />
        </section>
        <section className='main'>
          <CardContainer />
        </section>
      </div>
    );
  }
}

export default App;
