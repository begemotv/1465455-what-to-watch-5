import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import LoadMoreButton from "./load-more-button";

configure({adapter: new Adapter()});

test(`LoadMoreButton should be clicked once`, () => {
  const onShowMoreButtonClick = jest.fn();

  const wrapper = shallow(
      <LoadMoreButton
        onShowMoreButtonClick={onShowMoreButtonClick}
      />
  );

  const button = wrapper.find(`.catalog__button`);
  button.simulate(`click`);
  expect(onShowMoreButtonClick).toHaveBeenCalledTimes(1);
});
