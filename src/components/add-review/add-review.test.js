import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";

import AddReview from "./add-review";
import {noop} from "../../utils";
import {storeMock} from "../../test-data/store";

const commentTest = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor nisl eros, hendrerit auctor quam lobortis ut. Praesent magna odio, iaculis et mauris vel, tincidunt vulputate magna.`;
const ratingTest = `3`;

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

  it(`renders blocked form correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={storeMock}>
          <AddReview
            comment={commentTest}
            isReviewFormBlocked={true}
            isReviewValid={false}
            onFormSubmit={noop}
            onRatingChange={noop}
            onCommentChange={noop}
            ratingStars={ratingTest}
          />
        </Provider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
