import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

import Header from "./header";
import {AuthorizationStatus} from "../../const";
import {storeMock} from "../../test-data/store";

describe(`Header renders correctly`, () => {
  it(`renders with authorization`, () => {
    const tree = renderer
    .create(
        <Provider store={storeMock}>
          <MemoryRouter>
            <Header
              authorizationStatus={AuthorizationStatus.AUTH}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders without authorization`, () => {
    const tree = renderer
    .create(
        <Provider store={storeMock}>
          <MemoryRouter>
            <Header
              authorizationStatus={AuthorizationStatus.NO_AUTH}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
