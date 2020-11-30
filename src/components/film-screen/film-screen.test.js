import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

import {FilmScreen} from "./film-screen";
import {noop} from "../../utils";
import {filmMock, filmsMock} from "../../test-data/film-data";
import {AuthorizationStatus} from "../../const";
import {storeMock} from "../../test-data/store";

const moreLikeFilmsMock = filmsMock.slice(0, 4);

describe(`FilmScreen`, () => {
  it(`renders with authorization`, () => {
    const tree = renderer
    .create(
        <Provider store={storeMock}>
          <MemoryRouter>
            <FilmScreen
              authorizationStatus={AuthorizationStatus.AUTH}
              changeActiveFilmAction={noop}
              film={filmMock}
              handlePlayButtonClick={noop}
              moreLikeFilms={moreLikeFilmsMock}
            />
          </MemoryRouter>
        </Provider>

    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders without authorization`, () => {
    const tree = renderer
    .create(
        <Provider store={storeMock}>
          <MemoryRouter>
            <FilmScreen
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              changeActiveFilmAction={noop}
              film={filmMock}
              handlePlayButtonClick={noop}
              moreLikeFilms={moreLikeFilmsMock}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
