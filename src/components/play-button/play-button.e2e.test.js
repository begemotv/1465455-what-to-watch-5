import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import PlayButton from "./play-button";
import {DEFAULT_ID} from "../../const";

configure({adapter: new Adapter()});

const mockEvent = {
  preventDefault() {}
};

test(`PlayButton should be clicked once`, () => {
  const onPlayButtonClick = jest.fn();

  const wrapper = shallow(
      <PlayButton
        id={DEFAULT_ID}
        onPlayButtonClick={onPlayButtonClick}
      />
  );

  const button = wrapper.find(`.btn--play`);
  button.simulate(`click`, mockEvent);
  expect(onPlayButtonClick).toHaveBeenCalledTimes(1);
});
