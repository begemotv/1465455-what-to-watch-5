import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";

import AddReview from "./add-review";
import {noop} from "../../utils";
import {storeMock} from "../../test-data/store";

describe(`AddReview`, () => {
  it(`renders empty form correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={storeMock}>
          <AddReview
            isReviewFormBlocked={false}
            onReviewAdd={noop}
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
            isReviewFormBlocked={true}
            onReviewAdd={noop}
          />
        </Provider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
