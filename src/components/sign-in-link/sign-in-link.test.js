import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";

import SignInLink from "./sign-in-link";

test(`SignInLink renders correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter >
          <SignInLink />
        </MemoryRouter >
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
