import React from "react";
import renderer from "react-test-renderer";

import {TabReviews} from "./tab-reviews";
import {reviewsMock} from "../../test-data/film-data";

describe(`TabReviews renders correctly`, () => {
  it(`renders when fetching`, () => {
    const tree = renderer
    .create(
        <TabReviews
          reviews={reviewsMock}
          isFetching={true}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders when fetched`, () => {
    const tree = renderer
    .create(
        <TabReviews
          reviews={reviewsMock}
          isFetching={false}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
