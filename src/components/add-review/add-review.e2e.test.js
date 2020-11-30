import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {AddReview} from "./add-review";

configure({adapter: new Adapter()});

const onReviewAdd = jest.fn();

const mockEvent = {
  preventDefault() {}
};

describe(`AddReview function`, () => {
  it(`onFormSubmit should be called one time only`, () => {
    const wrapper = shallow(
        <AddReview
          onReviewAdd={onReviewAdd}
        />);

    const form = wrapper.find(`.add-review__form`);
    form.simulate(`submit`, mockEvent);
    expect(onReviewAdd).toHaveBeenCalledTimes(1);
  });
});
