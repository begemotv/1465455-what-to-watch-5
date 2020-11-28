import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";

import Logo from "./logo";

const classNameMock = `test`;

test(`Logo renders correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter >
          <Logo
            linkClassName={classNameMock}
          />
        </MemoryRouter >
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
