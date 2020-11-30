import React from "react";
import renderer from "react-test-renderer";

import withReview from "./with-review";
import {noop} from "../../utils";
import {DEFAULT_ID} from "../../const";

const MockComponent = () => {
  return (
    <React.Fragment/>
  );
};

const MockComponentHOC = withReview(MockComponent);

test(`withReview renders correctly`, () => {
  const tree = renderer
    .create(
        <MockComponentHOC
          id={DEFAULT_ID}
          onReviewAdd={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
