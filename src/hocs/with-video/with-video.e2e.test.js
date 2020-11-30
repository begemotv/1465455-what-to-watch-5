import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withVideo from './with-video';

configure({adapter: new Adapter()});

const MockComponent = () => <div/>;
const MockComponentHOC = withVideo(MockComponent);

describe(`withVideo changes state correctly`, () => {
  it(`Should change video status`, () => {
    const wrapper = shallow((
      <MockComponentHOC />
    ), {
      createNodeMock: () => {
        return {};
      }
    });

    expect(wrapper.props().isPlaying).toEqual(false);
    wrapper.props().onVideoStatusChange();
    expect(wrapper.props().isPlaying).toEqual(true);
  });

  it(`Should change player screen mode`, () => {
    const wrapper = shallow((
      <MockComponentHOC />
    ), {
      createNodeMock: () => {
        return {};
      }
    });

    expect(wrapper.props().isFullScreen).toEqual(false);
    wrapper.props().onScreenModeChange();
    expect(wrapper.props().isFullScreen).toEqual(true);
  });
});
