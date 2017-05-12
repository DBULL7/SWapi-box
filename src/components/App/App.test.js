import React from 'react';
import ReactDOM from 'react-dom';
import fetchMock from 'fetch-mock'
import App from './App';
import { shallow, mount } from 'enzyme'


describe('App Test', () => {

  const resolveAfter2Seconds = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }


  const mockCrawl1 = {
      opening_crawl: "It is a period of civil war",
      title: 'Mock Title',
      release_date: '2017-05-06'
    }

  const mockPeople = {"results": [
        {
            "name": "Luke Skywalker",
            "homeworld": "http://swapi.co/api/planets/1/",
            "species": [
                "http://swapi.co/api/species/1/"
            ]
        }
      ]}

  const mockPlanets = {"results": [
        {
            "name": "Alderaan",
            "climate": "temperate",
            "terrain": "grasslands, mountains",
            "population": "2000000000",
            "residents": [
                "http://swapi.co/api/people/5/",
            ]
        }]}

  const mockVehicles = {"results": [
    {
            "name": "TIE/LN starfighter",
            "model": "Twin Ion Engine/Ln Starfighter",
            "passengers": "0",
            "vehicle_class": "starfighter",
        }
  ]}


  fetchMock.get('http://swapi.co/api/films/1', {
    status: 200,
    body: {
      "opening_crawl": mockCrawl1.opening_crawl,
      "title": mockCrawl1.title,
      "release_date": mockCrawl1.release_date
    }
  })

  fetchMock.get('http://swapi.co/api/films/2', {
    status: 200,
    body: {
      "opening_crawl": mockCrawl1.opening_crawl,
      "title": mockCrawl1.title,
      "release_date": mockCrawl1.release_date
    }
  })

  fetchMock.get('http://swapi.co/api/films/3', {
    status: 200,
    body: {
      "opening_crawl": mockCrawl1.opening_crawl,
      "title": mockCrawl1.title,
      "release_date": mockCrawl1.release_date
    }
  })

  fetchMock.get('http://swapi.co/api/films/4', {
    status: 200,
    body: {
      "opening_crawl": mockCrawl1.opening_crawl,
      "title": mockCrawl1.title,
      "release_date": mockCrawl1.release_date
    }
  })

  fetchMock.get('http://swapi.co/api/films/5', {
    status: 200,
    body: {
      "opening_crawl": mockCrawl1.opening_crawl,
      "title": mockCrawl1.title,
      "release_date": mockCrawl1.release_date

    }
  })

  fetchMock.get('http://swapi.co/api/films/6', {
    status: 200,
    body: {
      "opening_crawl": mockCrawl1.opening_crawl,
      "title": mockCrawl1.title,
      "release_date": mockCrawl1.release_date
    }
  })

  fetchMock.get('http://swapi.co/api/films/7', {
    status: 200,
    body: {
      "opening_crawl": mockCrawl1.opening_crawl,
      "title": mockCrawl1.title,
      "release_date": mockCrawl1.release_date
    }
  })



  const mockPerson = {
    "name": "Leia Organa",
    "birth_year": "19BBY",
    "homeworld": "http://swapi.co/api/planets/2/",
    "species": [
        "http://swapi.co/api/species/1/"
    ]
  }

  const mockSpecies = {
    name: 'Human',
    language: 'Galactic Basic'
  }

  const mockHomeworld = {"results": [
        {
            "name": "Tatooine",
            "climate": "arid",
            "terrain": "desert",
            "population": "200000",
            "residents": [
                "http://swapi.co/api/people/5/",
                "http://swapi.co/api/people/68/",
                "http://swapi.co/api/people/81/"
            ]
        }]}

  // filmHelper()

    fetchMock.get('http://swapi.co/api/people/5/', {
      status: 200,
      body: mockPerson
    })

    fetchMock.get('http://swapi.co/api/people/', {
      status: 200,
      body: mockPeople
    })

    fetchMock.get('http://swapi.co/api/planets/', {
      status: 200,
      body: mockPlanets
    })

    fetchMock.get('http://swapi.co/api/vehicles/', {
      status: 200,
      body: mockVehicles
    })

    fetchMock.get('http://swapi.co/api/species/1/', {
      status: 200,
      body: mockSpecies
    })

    fetchMock.get('http://swapi.co/api/planets/1/', {
      status: 200,
      body: mockHomeworld
    })


  it('renders without crashing', async () => {

    const wrapper = mount(<App />);
    await resolveAfter2Seconds()
    expect(fetchMock.called()).toEqual(true)
    expect(wrapper.state('openingCrawl').opening_crawl).toEqual('It is a period of civil war')
    expect(wrapper.state('openingCrawl').title).toEqual('Mock Title')
    expect(wrapper.state('openingCrawl').release_date).toEqual('2017-05-06')
  });

  it('should return a div with a class of App', () => {

    const wrapper = shallow(<App />);
    expect(wrapper.find('.App')).toHaveLength(1);
  });

  it('should change the class of a button on click', () => {
    const wrapper = mount(<App />);
    const peopleButton = wrapper.find('button[name="people"]')
    const planetsButton = wrapper.find('button[name="planets"]')
    expect(wrapper.state().peopleButton).toEqual('inactive');
    peopleButton.simulate('click');
    expect(wrapper.state().peopleButton).toEqual('active');
    planetsButton.simulate('click');
    expect(wrapper.state().planetsButton).toEqual('active')
    expect(wrapper.state().peopleButton).toEqual('inactive')
  });

  it('should change the state of showFavorites when the showFavorites div is clicked', () => {
    const wrapper  = mount(<App />)
    const favoriteDiv = wrapper.find('.view-favorites')
    expect(wrapper.state().showFavorites).toEqual(false)
    favoriteDiv.simulate('click')
    expect(wrapper.state().showFavorites).toEqual(true)
  })

  it.skip('should tell us how many cards are favorited',  async () => {
    const wrapper = mount(<App />)
    await resolveAfter2Seconds()

    const peopleButton = wrapper.find('button[name="people"]')
    console.log(peopleButton);
    peopleButton.simulate('click')
    console.log(wrapper.state());

    const peopleCard = wrapper.find('.people')
    const favoriteButton = peopleCard.find('button[name="favoriteButton"]')

    favoriteButton.simulate('click')
    expect(wrapper.state().favorites.length).toEqual(1)

  })

  it('should change the state of cardData on a button click', async () => {
    const wrapper = mount(<App />)
    await resolveAfter2Seconds()
    const peopleButton = wrapper.find('button[name="people"]')
    peopleButton.simulate('click')
    const CardContainer = wrapper.find('<CardContainer/>')
    // console.log(wrapper.state());
    expect(CardContainer.children.length).toEqual(1)
    expect(wrapper.state().cardData.length).toEqual(1)
  })

  it('should have default states', () => {


    const wrapper = shallow(<App />);

    expect(wrapper.state().openingCrawl).toEqual({});
    expect(wrapper.state().cardData).toEqual([]);
    expect(wrapper.state().favorites).toEqual([]);
    expect(wrapper.state().people).toEqual([]);
    expect(wrapper.state().planets).toEqual([]);
    expect(wrapper.state().vehicles).toEqual([]);
    expect(wrapper.state().peopleButton).toEqual('inactive');
    expect(wrapper.state().showFavorites).toEqual(false);
  });

});
