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
      videoSrcTrailer,
    },
    isCardActive,
    onCardClick,
    onItemInteraction,
    onItemInteractionEnd
  } = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onClick={onCardClick}
      onMouseEnter={() => onItemInteraction(id)}
      onMouseLeave={onItemInteractionEnd}
    >
      <Link to={`/films/${id}`} className="small-movie-card__link">
        <div className="small-movie-card__image">
          {isCardActive &&
                <VideoPlayerHOC
                  isCardPreview={true}
                  previewImg={previewImg}
                  videoSrc={videoSrcTrailer}
                  delay={1000}
                />
          }
          {!isCardActive &&
                <img
                  src={previewImg}
                  alt={name}
                />
          }
        </div>
        <h3 className="small-movie-card__title">{name}</h3>
      </Link>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape(filmPropTypes).isRequired,
  isCardActive: PropTypes.bool.isRequired,
  onCardClick: PropTypes.func.isRequired,
  onItemInteraction: PropTypes.func.isRequired,
  onItemInteractionEnd: PropTypes.func.isRequired,
};

export default FilmCard;
