import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";

import AddReview from "./add-review";
import {noop} from "../../utils";
import {storeMock} from "../../test-data/store";
import {commentMock, ratingMock} from "../../test-data/film-data";

describe(`AddReview renders correctly`, () => {
  it(`renders empty form correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={storeMock}>
          <AddReview
            comment={``}
            isReviewFormBlocked={false}
            isReviewValid={false}
            onFormSubmit={noop}
            onRatingChange={noop}
            onCommentChange={noop}
            ratingStars={``}
          />
        </Provider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders form with valid comment correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={storeMock}>
          <AddReview
            comment={``}
            isReviewFormBlocked={false}
            isReviewValid={true}
            onFormSubmit={noop}
            onRatingChange={noop}
            onCommentChange={noop}
            ratingStars={``}
          />
        </Provider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders form with valid comment and rating correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={storeMock}>
          <AddReview
            comment={``}
            isReviewFormBlocked={false}
            isReviewValid={true}
            onFormSubmit={noop}
            onRatingChange={noop}
            onCommentChange={noop}
            ratingStars={ratingMock}
          />
        </Provider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders blocked form correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={storeMock}>
          <AddReview
            comment={commentMock}
            isReviewFormBlocked={true}
            isReviewValid={true}
            onFormSubmit={noop}
            onRatingChange={noop}
            onCommentChange={noop}
            ratingStars={ratingMock}
          />
        </Provider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
