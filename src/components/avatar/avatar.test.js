import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

import Avatar from "./avatar";
import {storeMock} from "../../test-data/store";

test(`Avatar renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={storeMock}>
          <MemoryRouter >
            <Avatar />
          </MemoryRouter >
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
