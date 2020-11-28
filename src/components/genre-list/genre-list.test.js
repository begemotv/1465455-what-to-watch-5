import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";

import {GenreList} from "./genre-list";
import {noop} from "../../utils";

const activeGenreMock = `Action`;
const genreListMock = [`Action`, `Drama`, `Comedy`, `Thriller`, `Horror`];

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
