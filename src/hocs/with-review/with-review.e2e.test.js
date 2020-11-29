import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withReview from './with-review';
import {DEFAULT_ID} from '../../const';

configure({adapter: new Adapter()});

const MockComponent = () => <div/>;
const MockComponentHOC = withReview(MockComponent);

const onReviewAdd = jest.fn();

describe(`withReview changes state correctly`, () => {
  it(`Should change comment text`, () => {
    const wrapper = shallow(
        <MockComponentHOC
          id={DEFAULT_ID}
          onReviewAdd={onReviewAdd}
        />
    );

    expect(wrapper.props().comment).toEqual(``);
    wrapper.props().onCommentChange({target: {value: `Test comment`}});
    expect(wrapper.props().comment).toEqual(`Test comment`);
  });

  it(`Should change rating stars`, () => {
    const wrapper = shallow(
        <MockComponentHOC
          id={DEFAULT_ID}
          onReviewAdd={onReviewAdd}
        />
    );

    expect(wrapper.props().ratingStars).toEqual(``);
    wrapper.props().onRatingChange({target: {value: `2`}});
    expect(wrapper.props().ratingStars).toEqual(`2`);
  });
});
