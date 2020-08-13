import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App.jsx';

describe('App', () => {
  it('should render correctly with no props', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper).toMatchSnapshot();
  });
});