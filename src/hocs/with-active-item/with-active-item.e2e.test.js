import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withActiveItem from './with-active-item';

configure({adapter: new Adapter()});

const MockComponent = () => <div/>;
const MockComponentHOC = withActiveItem(MockComponent);

test(`Should change active item`, () => {
  const wrapper = shallow(
      <MockComponentHOC/>
  );

  expect(wrapper.props().activeItem).toEqual(0);
  wrapper.props().onItemInteraction(1);
  expect(wrapper.props().activeItem).toEqual(1);
  wrapper.props().onItemInteractionEnd();
  expect(wrapper.props().activeItem).toEqual(0);
});
