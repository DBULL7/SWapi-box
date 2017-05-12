import React from 'react';
import VehicleCard from './VehicleCard';
import { shallow, mount } from 'enzyme';

describe('VehicleCard Tests', () => {
  const mockData = {
    name: 'Starfighter',
    model: 'X-Wing',
    class: 'Awesome',
    passengers: '10'
  }

  const mockFn = jest.fn();

  it('should render when data is passed in as props', () => {
    const wrapper = mount(<VehicleCard info={mockData} />);

    expect(wrapper.find('.vehicle')).toHaveLength(1);
  });

  it('should have a default favorited state', () => {
    const wrapper = shallow(<VehicleCard info={mockData} />);

    expect(wrapper.state('favorited')).toEqual(false);
  });

  it('should update state on click', () => {
    const wrapper = mount(<VehicleCard info={mockData} handleClick={mockFn}/>);

    const faveBtn = wrapper.find('button');
    expect(wrapper.state('favorited')).toEqual(false);

    faveBtn.simulate('click');

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(wrapper.state('favorited')).toEqual(true);
  });
});
