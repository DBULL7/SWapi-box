import React from 'react';
import fetchMock from 'fetch-mock';
import PlanetCard from './PlanetCard';
import { shallow, mount } from 'enzyme';

describe('PlanetCard tests', () => {
  const mockData = {
    name: 'Mock name',
    terrain: 'Mock terrain',
    population: 'Mock population',
    climate: 'Mock climate',
    residents: [
      "http://swapi.co/api/people/5/"
    ]
  }

  const mockResident = {
    name: "Leia Organa",
  }

  const mockFn = jest.fn();

  fetchMock.get('http://swapi.co/api/people/5/', {
    status: 200,
    body: {
      name: mockResident.name
    }
  });

  function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  it('should have default states', () => {
    const wrapper = shallow(<PlanetCard info={mockData}/>);

    expect(wrapper.state().residents).toEqual([]);
    expect(wrapper.state().favorited).toEqual(false);
  });

  it('should set state based on api response', async () => {
    const wrapper = mount(<PlanetCard info={mockData}
                                      handleClick={mockFn} />);

    await resolveAfter2Seconds();

    console.log(wrapper.state());
  });


});
