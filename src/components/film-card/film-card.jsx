import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

import {filmPropTypes} from "../../prop-types";
import VideoPlayer from "../video-player/video-player";
import withVideo from "../../hocs/with-video/with-video";

const VideoPlayerHOC = withVideo(VideoPlayer);


const FilmCard = (props) => {
  const {
    film: {
      id,
      name,
      previewImg,
      videoSrc
    },
  } = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
    >
      <Link to={`/films/${id}`} className="small-movie-card__link">
        <VideoPlayerHOC
          previewImg={previewImg}
          videoSrc={videoSrc}
        />
        <h3 className="small-movie-card__title">{name}</h3>
      </Link>
    </article>
  );
};

FilmCard.propTypes = {
  handleFilmCardClick: PropTypes.func.isRequired,
  film: PropTypes.shape(filmPropTypes).isRequired
};

export default FilmCard;
