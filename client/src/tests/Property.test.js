import React from 'react';
import { mount, shallow } from 'enzyme';
import Property from '../components/Property.jsx'

describe('Property component', () => {
  const propertyDetails = {
    "id": 999,
    "name": "test place",
    "superhost": 1,
    "type": "Shared room",
    "beds": 1,
    "price": 99,
    "rating": 4.5,
    "review_count": 8,
    "image": "./test-path.jpg",
    "list": 2
  };
  const wrapper = shallow(<Property image={propertyDetails.image} rating={propertyDetails.rating} review_count={propertyDetails.review_count} type={propertyDetails.type} beds={propertyDetails.beds} name={propertyDetails.name} price={propertyDetails.price}/>);

  it('should get the property image path', () => {
    expect(wrapper.props().children[0].props.children[0].props.src).toEqual("./test-path.jpg");
  });

  it('should get the property rating', () => {
    expect(wrapper.props().children[1].props.children[1]).toEqual(4.5);
  });

  it('should get the property review count', () => {
    expect(wrapper.props().children[1].props.children[3]).toEqual(8);
  });

  it('should get the property type', () => {
    expect(wrapper.props().children[2].props.children[0]).toEqual('Shared room');
  });

  it('should get the property bed count', () => {
    expect(wrapper.props().children[2].props.children[2]).toEqual(1);
  });

  it('should get the property name', () => {
    expect(wrapper.props().children[3].props.children).toEqual('test place')
  });

  it('should get the property price', () => {
    expect(wrapper.props().children[4].props.children[1]).toEqual(99)
  });
});