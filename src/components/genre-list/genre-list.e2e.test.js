import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {GenreList} from "./genre-list";
import {activeGenreMock, genreListMock} from "../../test-data/film-data";

configure({adapter: new Adapter()});

const mockEvent = {
  preventDefault() {}
};

test(`GenreList allows to select a genre`, () => {
  const handleGenreTabClick = jest.fn();

  const wrapper = shallow(
      <GenreList
        activeGenre={activeGenreMock}
        genreList={genreListMock}
        handleGenreTabClick={handleGenreTabClick}
      />
  );

  const genreTab = wrapper.find(`.catalog__genres-link`).at(2);
  genreTab.simulate(`click`, mockEvent);
  expect(handleGenreTabClick).toHaveBeenCalledTimes(1);
});
