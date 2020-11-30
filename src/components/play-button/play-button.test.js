import React from "react";
import renderer from "react-test-renderer";

import PlayButton from "./play-button";
import {noop} from "../../utils";
import {DEFAULT_ID} from "../../const";

test(`PlayButton renders correctly`, () => {
  const tree = renderer
    .create(
        <PlayButton
          id={DEFAULT_ID}
          onPlayButtonClick={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
