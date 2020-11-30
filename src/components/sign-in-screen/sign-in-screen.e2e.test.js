import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MemoryRouter} from "react-router-dom";

import {SignInScreen} from "./sign-in-screen";

configure({adapter: new Adapter()});

const mockEvent = {
  preventDefault() {}
};

test(`onFormSubmit should be called one time only`, () => {
  const onSubmit = jest.fn();
  const wrapper = mount(
      <MemoryRouter>
        <SignInScreen
          onSubmit={onSubmit}
        />
      </MemoryRouter>);

  const form = wrapper.find(`.sign-in__form`);
  form.simulate(`submit`, mockEvent);
  expect(onSubmit).toHaveBeenCalledTimes(1);
});

