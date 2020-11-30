import React from "react";
import renderer from "react-test-renderer";

import LoadMoreButton from "./load-more-button";
import {noop} from "../../utils";

test(`LoadMoreButton renders correctly`, () => {
  const tree = renderer
    .create(
        <LoadMoreButton
          onShowMoreButtonClick={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
