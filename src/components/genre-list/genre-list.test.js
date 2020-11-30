import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";

import {GenreList} from "./genre-list";
import {noop} from "../../utils";
import {activeGenreMock, genreListMock} from "../../test-data/film-data";

test(`GenreList renders correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter >
          <GenreList
            activeGenre={activeGenreMock}
            genreList={genreListMock}
            handleGenreTabClick={noop}
          />,
        </MemoryRouter >
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
