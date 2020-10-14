import PropTypes from 'prop-types';

export const filmPropTypes = {
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  previewImg: PropTypes. string.isRequired,
  rating: PropTypes.number.isRequired,
  ratingName: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
  runningTime: PropTypes.string.isRequired,
  starring: PropTypes.string.isRequired,
  videoSrc: PropTypes.string.isRequired,
  voteCount: PropTypes.number.isRequired
};

export const reviewPropTypes = {
  date: PropTypes.string.isRequired,
  starsRating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

