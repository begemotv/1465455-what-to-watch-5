import React from "react";
import renderer from "react-test-renderer";

import {PlayerScreen} from "./player-screen";
import {filmMock} from "../../test-data/film-data";

describe(`PlayerScreen`, () => {
  it(`renders when playing`, () => {
    const tree = renderer
    .create(
        <PlayerScreen
          film={filmMock}
          isPlaying={true}
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
          isPlaying={false}
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
