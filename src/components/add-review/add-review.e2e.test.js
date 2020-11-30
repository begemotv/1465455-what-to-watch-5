import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {AddReview} from "./add-review";
import {noop} from "../../utils";
import {commentMock, ratingMock} from "../../test-data/film-data";

configure({adapter: new Adapter()});

const onCommentChange = jest.fn();
const onRatingChange = jest.fn();
const onFormSubmit = jest.fn();

const mockEvent = {
  preventDefault() {}
};

describe(`AddReview calls functions correctly`, () => {
  it(`onRatingChange should be called one time only`, () => {
    const wrapper = shallow(
        <AddReview
          comment={commentMock}
          isReviewFormBlocked={false}
          isReviewValid={true}
          onCommentChange={noop}
          onRatingChange={onRatingChange}
          onFormSubmit={noop}
          ratingStars={ratingMock}
        />);

    const rating = wrapper.find(`.rating__input`).at(1);
    rating.simulate(`change`, mockEvent);
    expect(onRatingChange).toHaveBeenCalledTimes(1);
  });

  it(`onCommentChange should be called one time only`, () => {
    const wrapper = shallow(
        <AddReview
          comment={commentMock}
          isReviewFormBlocked={false}
          isReviewValid={true}
          onCommentChange={onCommentChange}
          onRatingChange={noop}
          onFormSubmit={noop}
          ratingStars={ratingMock}
        />);

    const textarea = wrapper.find(`.add-review__textarea`);
    textarea.simulate(`change`, mockEvent);
    expect(onCommentChange).toHaveBeenCalledTimes(1);
  });

  it(`onFormSubmit should be called one time only`, () => {
    const wrapper = shallow(
        <AddReview
          comment={commentMock}
          isReviewFormBlocked={false}
          isReviewValid={true}
          onCommentChange={noop}
          onRatingChange={noop}
          onFormSubmit={onFormSubmit}
          ratingStars={ratingMock}
        />);

    const form = wrapper.find(`.add-review__form`);
    form.simulate(`submit`, mockEvent);
    expect(onFormSubmit).toHaveBeenCalledTimes(1);
  });
});
