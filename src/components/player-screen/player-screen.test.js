import React from "react";
import renderer from "react-test-renderer";

import {PlayerScreen} from "./player-screen";
import {filmMock, durationMock, progressMock, timeElapsedMock, refMock} from "../../test-data/film-data";
import {noop} from "../../utils";

describe(`PlayerScreen renders correctly`, () => {
  it(`renders when playing`, () => {
    const tree = renderer
    .create(
        <PlayerScreen
          film={filmMock}
          duration={durationMock}
          isPlaying={true}
          onVideoStatusChange={noop}
          onScreenModeChange={noop}
          videoRef={refMock}
          progress={progressMock}
          timeElapsed={timeElapsedMock}
        />
        , {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders when stopped`, () => {
    const tree = renderer
    .create(
        <PlayerScreen
          film={filmMock}
          duration={durationMock}
          isPlaying={false}
          onVideoStatusChange={noop}
          onScreenModeChange={noop}
          videoRef={refMock}
          progress={progressMock}
          timeElapsed={timeElapsedMock}
        />
        , {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
