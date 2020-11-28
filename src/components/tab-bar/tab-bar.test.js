import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

import TabBar from "./tab-bar";
import {filmMock} from "../../test-data/film-data";
import {noop} from "../../utils";
import {storeMock} from "../../test-data/store";

test(`TabBar renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={storeMock}>
          <MemoryRouter>
            <TabBar
              film={filmMock}
              getActiveReviews={noop}
              changeActiveTabAction={noop}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
