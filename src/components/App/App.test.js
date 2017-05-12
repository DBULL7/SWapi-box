import React from 'react';
import ReactDOM from 'react-dom';
import fetchMock from 'fetch-mock'
import App from './App';
import { shallow, mount } from 'enzyme'


describe('App Test', () => {

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([])
    fetchMock.restore()
  });

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

  const mockPeople =  {"results": [
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
                "http://swapi.co/api/people/68/",
                "http://swapi.co/api/people/81/"
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
  const filmHelper = () => {
    for(let i = 1; i <= 7; i++) {
      fetchMock.get(`http://swapi.co/api/films/${i}`, {
        status: 200,
        body: mockCrawl1
      });
    }
  }

  it('renders without crashing', async () => {
    filmHelper()


    fetchMock.get('*', {
      status: 200
    })

    const wrapper = mount(<App />);
    await resolveAfter2Seconds()
    expect(fetchMock.called()).toEqual(true)
    expect(wrapper.state('openingCrawl').opening_crawl).toEqual('It is a period of civil war')
    expect(wrapper.state('openingCrawl').title).toEqual('Mock Title')
  });

  it('should return a div with a class of App', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('.App')).toHaveLength(1);
  });

  it('should change the class of a button on click', () => {
    const wrapper = mount(<App />);
    const button = wrapper.find('button[name="people"]')
    expect(wrapper.state().peopleButton).toEqual('inactive');
    button.simulate('click');
    expect(wrapper.state().peopleButton).toEqual('active');
  });

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

  // it('should display the opening crawl', () => {
  //   const wrapper = mount(<App />);
  //   expect(wrapper.find('.opening-header').text()).toEqual('');
  //
  //   wrapper.setState({
  //     openingCrawl: mockCrawl1
  //   });
  //
  //   expect(wrapper.find('.opening-header').text())
  //   .toEqual('Mock TitleIt is a period of civil war2017-05-06');
  // });

});
