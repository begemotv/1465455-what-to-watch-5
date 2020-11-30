import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";

import ErrorServer from "./error-server";

test(`ErrorServer renders correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter >
          <ErrorServer />
        </MemoryRouter >
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
