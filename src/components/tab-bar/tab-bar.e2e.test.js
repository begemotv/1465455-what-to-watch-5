import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {TabBar} from "./tab-bar";
import {filmMock} from "../../test-data/film-data";
import {DEFAULT_ID} from "../../const";

configure({adapter: new Adapter()});

const mockEvent = {
  preventDefault() {}
};

test(`TabBar allows to select a tab`, () => {
  const getActiveReviews = jest.fn();
  const changeActiveTabAction = jest.fn();

  const wrapper = shallow(
      <TabBar
        activeTab={DEFAULT_ID}
        film={filmMock}
        getActiveReviews={getActiveReviews}
        changeActiveTabAction={changeActiveTabAction}
      />
  );

  const tab = wrapper.find(`.movie-nav__link`).at(1);
  tab.simulate(`click`, mockEvent);
  expect(getActiveReviews).toHaveBeenCalledTimes(1);
  expect(changeActiveTabAction).toHaveBeenCalledTimes(1);
});
