import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

import {AddReviewScreen} from "./add-review-screen";
import {noop} from "../../utils";
import {filmMock} from "../../test-data/film-data";
import {storeMock} from "../../test-data/store";

test(`AddReviewScreen renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={storeMock}>
          <MemoryRouter >
            <AddReviewScreen
              film={filmMock}
              onReviewAdd={noop}
            />,
          </MemoryRouter >
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
