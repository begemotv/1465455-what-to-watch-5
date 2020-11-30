import React from "react";
import renderer from "react-test-renderer";

import {MyListButton} from "./my-list-button";
import {noop} from "../../utils";
import {filmMock} from "../../test-data/film-data";

describe(`MyListButton`, () => {
  it(`renders with added to favourites`, () => {
    const tree = renderer
    .create(
        <MyListButton
          id={filmMock.id}
          isFavorite={true}
          onAddToFavorites={noop}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders without added to favourites`, () => {
    const tree = renderer
    .create(
        <MyListButton
          id={filmMock.id}
          isFavorite={false}
          onAddToFavorites={noop}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
