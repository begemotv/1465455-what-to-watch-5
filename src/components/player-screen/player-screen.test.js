import React from "react";
import renderer from "react-test-renderer";

import {PlayerScreen} from "./player-screen";
import {filmMock} from "../../test-data/film-data";
import {noop} from "../../utils";

const durationMock = 65;
const progressMock = 35;
const timeElapsedMock = `00:01:09`;
const refMock = React.createRef();

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
