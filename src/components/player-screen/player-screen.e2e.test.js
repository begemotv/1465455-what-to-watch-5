import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {PlayerScreen} from "./player-screen";
import {filmMock, durationMock, progressMock, timeElapsedMock, refMock} from "../../test-data/film-data";
import {noop} from "../../utils";

configure({adapter: new Adapter()});

const onVideoStatusChange = jest.fn();
const onScreenModeChange = jest.fn();

describe(`PlayerScreen calls functions correctly`, () => {
  it(`Play button should be clicked one time only`, () => {
    const wrapper = shallow(
        <PlayerScreen
          film={filmMock}
          duration={durationMock}
          isPlaying={true}
          onVideoStatusChange={onVideoStatusChange}
          onScreenModeChange={noop}
          videoRef={refMock}
          progress={progressMock}
          timeElapsed={timeElapsedMock}
        />);

    const playButton = wrapper.find(`.player__play`);
    playButton.simulate(`click`);
    expect(onVideoStatusChange).toHaveBeenCalledTimes(1);
  });

  it(`FullScreen button should be clicked one time only`, () => {
    const wrapper = shallow(
        <PlayerScreen
          film={filmMock}
          duration={durationMock}
          isPlaying={true}
          onVideoStatusChange={noop}
          onScreenModeChange={onScreenModeChange}
          videoRef={refMock}
          progress={progressMock}
          timeElapsed={timeElapsedMock}
        />);

    const fullScreenButton = wrapper.find(`.player__full-screen`);
    fullScreenButton.simulate(`click`);
    expect(onScreenModeChange).toHaveBeenCalledTimes(1);
  });
});
