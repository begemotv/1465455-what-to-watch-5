import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";

import ErrorNotFound from "./error-not-found";

test(`ErrorNotFound renders correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter >
          <ErrorNotFound />
        </MemoryRouter >
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
