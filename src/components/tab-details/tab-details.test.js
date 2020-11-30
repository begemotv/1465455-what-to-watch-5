import React from "react";
import renderer from "react-test-renderer";

import TabDetails from "./tab-details";
import {filmMock} from "../../test-data/film-data";

test(`TabDetails renders correctly`, () => {
  const tree = renderer
    .create(
        <TabDetails
          film={filmMock}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
