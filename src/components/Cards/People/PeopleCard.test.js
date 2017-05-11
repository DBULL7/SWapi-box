import React from 'react';
import fetchMock from 'fetch-mock';
import PeopleCard from './PeopleCard';
import { shallow, mount } from 'enzyme';

describe('PeopleCard test', () => {

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([])
    fetchMock.restore()
  });

  const mockData = {
    name: 'Mock name',
    homeworld: 'http://swapi.co/api/planets/1',
    species: 'http://swapi.co/api/species/1/',
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

  const mockSpecies = {
    name: 'Human',
    language: 'Galactic Basic'
  }

  const mockFn = jest.fn();

  fetchMock.get('http://swapi.co/api/planets/1', {
    status: 200,
    body: {
      mockHomeworld
    }
  });

  fetchMock.get('http://swapi.co/api/species/1/', {
    status: 200,
    body: {
      mockSpecies
    }
  });

  function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  it('should have a default states', () => {
    const wrapper = shallow(<PeopleCard info={mockData}/>);

    expect(wrapper.state().favorited).toEqual(false);
    expect(wrapper.state().name).toEqual('');
    expect(wrapper.state().homeworld).toEqual('');
    expect(wrapper.state().homeworldPopulation).toEqual('');
    expect(wrapper.state().species).toEqual('');
    expect(wrapper.state().language).toEqual('');
  });

  it('should set state based on api response', async () => {
    const wrapper = mount(<PeopleCard info={mockData} />);
    await resolveAfter2Seconds();

    expect(wrapper.state().name).toEqual('Mock name');
    expect(wrapper.state().homeworld).toEqual('Tatooine');
    expect(wrapper.state().homeworldPopulation).toEqual('200000');
    expect(wrapper.state().species).toEqual('Human');
    expect(wrapper.state().language).toEqual('Galactic Basic');
  });

  it('should change favorite status on click', () => {
    const wrapper = mount(<PeopleCard info={mockData}
                                      handleClick={mockFn}/>);
    const faveBtn = wrapper.find('.unfavorited');

    expect(wrapper.state().favorited).toEqual(false);
    faveBtn.simulate('click');

    expect(wrapper.state().favorited).toEqual(true);
  });
});
