import React from "react";
import renderer from "react-test-renderer";

import ErrorPopup from "./error-popup";

test(`ErrorPopup renders correctly`, () => {
  const tree = renderer
    .create(
        <ErrorPopup />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
