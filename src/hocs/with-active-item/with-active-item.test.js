import React from "react";
import renderer from "react-test-renderer";

import withActiveItem from "./with-active-item";

const MockComponent = () => {
  return (
    <React.Fragment/>
  );
};

const MockComponentHOC = withActiveItem(MockComponent);

test(`withActiveItem renders correctly`, () => {
  const tree = renderer
    .create(
        <MockComponentHOC/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
