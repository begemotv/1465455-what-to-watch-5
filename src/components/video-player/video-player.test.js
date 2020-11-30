import React from "react";
import renderer from "react-test-renderer";

import VideoPlayer from "./video-player";
import {filmMock, refMock} from "../../test-data/film-data";

test(`VideoPlayer renders correctly`, () => {
  const tree = renderer
    .create(
        <VideoPlayer
          isCardPreview={true}
          previewImg={filmMock.previewImg}
          videoRef={refMock}
          videoSrc={filmMock.videoSrc}
        />
        , {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
