import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";

import Footer from "./footer";

test(`Footer renders correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter >
          <Footer />
        </MemoryRouter >
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
