import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

import MainScreen from "./main-screen";
import {filmMock} from "../../test-data/film-data";
import {noop} from "../../utils";
import {storeMock} from "../../test-data/store";

test(`MainScreen renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={storeMock}>
          <MemoryRouter>
            <MainScreen
              film={filmMock}
              handlePlayButtonClick={noop}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
