import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {MyListButton} from "./my-list-button";
import {DEFAULT_ID} from "../../const";

configure({adapter: new Adapter()});

test(`MyListButton should be clicked once`, () => {
  const onAddToFavorites = jest.fn();

  const wrapper = shallow(
      <MyListButton
        id={DEFAULT_ID}
        isFavorite={false}
        onAddToFavorites={onAddToFavorites}
      />
  );

  const button = wrapper.find(`.btn--list`);
  button.simulate(`click`);
  expect(onAddToFavorites).toHaveBeenCalledTimes(1);
});
