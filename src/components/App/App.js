import React, { Component } from 'react';
import Favorites from '../Favorites/Favorites';
import CardContainer from '../CardContainer/CardContainer';
import Sidebar from '../Sidebar/Sidebar';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      openingCrawl: ''
    }
  }

  componentDidMount() {
    fetch('http://swapi.co/api/films/1', {method: 'get'} )
    .then((response) => response.json())
    .then(data => {
      this.setState({openingCrawl: data.opening_crawl});
    })

      // let test = response.json()
      // let test2 = (test)
      // console.log(test2)
      // console.log(test2);

    // .catch(error => {
    //   console.log(error)
    // })
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
          <Sidebar openingCrawl={this.state.openingCrawl} />
        </section>
        <section className='main'>
          <CardContainer />
        </section>
      </div>
    );
  }
}

export default App;
