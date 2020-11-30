import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

import App from "./app";
import {storeMock} from "../../test-data/store";
import {AuthorizationStatus} from "../../const";

describe(`App renders correctly`, () => {
  it(`renders with authorization`, () => {
    const tree = renderer
    .create(
        <Provider store={storeMock}>
          <MemoryRouter>
            <App
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
            <App
              authorizationStatus={AuthorizationStatus.NO_AUTH}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
