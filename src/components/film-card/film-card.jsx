import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

import VideoPlayer from "../video-player/video-player";
import {AppRoute} from "../../const";
import {filmPropTypes} from "../../prop-types";

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
      <Link to={`${AppRoute.FILMS}${id}`} className="small-movie-card__link">
        <div className="small-movie-card__image">
          {isCardActive &&
                <VideoPlayer
                  isCardPreview={true}
                  previewImg={previewImg}
                  videoSrc={videoSrcTrailer}
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
