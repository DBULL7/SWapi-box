import React from 'react';
import FavoritedCards from './FavoritedCards';
import { shallow, mount } from 'enzyme';

describe('FavoritedCards Tests', () => {
  const mockData = [
    { name: 'Luke Skywalker', homeworld: 'Tatooine', species: 'Human', homeworldPopulation: '1000', language: 'English' },
    { name: 'Starfighter', model: 'X-Wing', vehicle_class: 'Awesome', passengers: '10' },
    { name: 'Starfighter', model: 'X-Wing', vehicle_class: 'Awesome', passengers: '10' },
    { name: 'Tatooine', terrain: 'Desert', population: '1000', climate: 'Dry', residents: [] }
  ]

  const mockFn = jest.fn();

  it('should render people cards based on species property', () => {
    const wrapper = mount(<FavoritedCards favorites={mockData} unfavoriteCard={mockFn} />);

    expect(wrapper.find('.people')).toHaveLength(1);
  });

  it('should render vehicle cards based on model property', () => {
    const wrapper = mount(<FavoritedCards favorites={mockData} unfavoriteCard={mockFn} />);

    expect(wrapper.find('.vehicle')).toHaveLength(2);
  });

  it('should render planet cards based on anything else', () => {
    const wrapper = mount(<FavoritedCards favorites={mockData} unfavoriteCard={mockFn} />);

    expect(wrapper.find('.planets')).toHaveLength(1);
  });
});
