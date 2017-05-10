import React from 'react';
import Sidebar from './Sidebar';
import { shallow, mount } from 'enzyme'

describe('Sidebar tests', () => {

  it('should have a nav with a class of opening-header', () => {
    const wrapper = shallow(<Sidebar />);

    expect(wrapper.find('.opening-header')).toHaveLength(1);
  });

  it('should have three html elements within', () => {
    const wrapper = shallow(<Sidebar />);

    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('p')).toHaveLength(1);
  });

  it('should accept strings as props to render', () => {
    const wrapper = shallow(<Sidebar title={'Mock Title'}
                                     release_date={'Mock Date'}
                                     opening_crawl={'Mock Crawl'}
                                  />);

    expect(wrapper.find('h1').text()).toEqual('Mock Title');
    expect(wrapper.find('h2').text()).toEqual('Mock Date');
    expect(wrapper.find('p').text()).toEqual('Mock Crawl');

  });

});
