import React from "react";
import renderer from "react-test-renderer";

import TabOverview from "./tab-overview";
import {filmMock} from "../../test-data/film-data";

test(`TabOverview renders correctly`, () => {
  const tree = renderer
    .create(
        <TabOverview
          film={filmMock}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
