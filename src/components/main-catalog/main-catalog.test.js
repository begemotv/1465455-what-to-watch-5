import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

import MainCatalog from "./main-catalog";
import {noop} from "../../utils";
import {filmsMock} from "../../test-data/film-data";
import {storeMock} from "../../test-data/store";

const filmsEightMock = filmsMock.slice(0, 8);

describe(`MainCatalog renders correctly`, () => {
  it(`renders with more films`, () => {
    const tree = renderer
    .create(
        <Provider store={storeMock}>
          <MemoryRouter>
            <MainCatalog
              hasMoreFilms={true}
              incrementCardCount={noop}
              filmsToShow={filmsEightMock}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders without more films`, () => {
    const tree = renderer
    .create(
        <Provider store={storeMock}>
          <MemoryRouter>
            <MainCatalog
              hasMoreFilms={false}
              incrementCardCount={noop}
              filmsToShow={filmsEightMock}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
