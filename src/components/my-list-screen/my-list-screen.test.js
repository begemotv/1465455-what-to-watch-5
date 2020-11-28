import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

import MyListScreen from "./my-list-screen";
import {storeMock} from "../../test-data/store";

test(`MyListScreen renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={storeMock}>
          <MemoryRouter>
            <MyListScreen />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
