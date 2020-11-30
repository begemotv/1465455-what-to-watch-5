import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";

import AddReview from "./add-review";
import {noop} from "../../utils";
import {storeMock} from "../../test-data/store";
import {DEFAULT_ID} from "../../const";

describe(`AddReview`, () => {
  it(`renders empty form correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={storeMock}>
          <AddReview
            id={DEFAULT_ID}
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
            id={DEFAULT_ID}
            isReviewFormBlocked={true}
            onReviewAdd={noop}
          />
        </Provider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
