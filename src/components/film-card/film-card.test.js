import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";

import FilmCard from "./film-card";
import {filmMock} from "../../test-data/film-data";
import {noop} from "../../utils";

describe(`FilmCard`, () => {
  it(`renders when card is active`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <FilmCard
            film={filmMock}
            isCardActive={true}
            onCardClick={noop}
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

  it(`renders when card is not active`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <FilmCard
            film={filmMock}
            isCardActive={true}
            onCardClick={noop}
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
});
