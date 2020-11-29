import React from "react";
import renderer from "react-test-renderer";

import withVideo from "./with-video";
import {DEFAULT_ID} from "../../const";
import {filmMock} from "../../test-data/film-data";

const delayMock = 1000;

const MockComponent = () => {

  return (
    <React.Fragment/>
  );
};

const MockComponentHOC = withVideo(MockComponent);

describe(`withVideo renders correctly`, () => {
  it(`renders when big player starts (no delay)`, () => {
    const tree = renderer
    .create((
      <MockComponentHOC
        id={DEFAULT_ID}
      />
    ), {
      createNodeMock: () => {
        return {};
      }
    }
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders when preview starts`, () => {
    const tree = renderer
    .create((
      <MockComponentHOC
        delay={delayMock}
        isCardPreview={true}
        previewImg={filmMock.previewImg}
        videoSrc={filmMock.videoSrcTrailer}
      />
    ), {
      createNodeMock: () => {
        return {};
      }
    }
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
