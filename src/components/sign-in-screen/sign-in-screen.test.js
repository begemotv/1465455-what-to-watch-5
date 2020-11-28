import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";

import {SignInScreen} from "./sign-in-screen";
import {noop} from "../../utils";

test(`SignInScreen renders correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <SignInScreen
            onSubmit={noop}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
