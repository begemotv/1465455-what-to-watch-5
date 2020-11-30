import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";

import {FilmList} from "./film-list";
import {noop} from "../../utils";
import {filmsMock} from "../../test-data/film-data";

const activeItemMock = 1;

test(`FilmList renders correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <FilmList
            activeItem={activeItemMock}
            films={filmsMock}
            changeActiveFilmAction={noop}
            onItemInteraction={noop}
            onItemInteractionEnd={noop}
          />
        </MemoryRouter>
        , {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
