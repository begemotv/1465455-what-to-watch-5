import PropTypes from 'prop-types';

export const filmPropTypes = {
  backgroundColor: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  previewImg: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  ratingName: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
  runningTime: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  videoSrc: PropTypes.string.isRequired,
  videoSrcTrailer: PropTypes.string.isRequired,
  voteCount: PropTypes.number.isRequired
};

export const reviewPropTypes = {
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export const userPropTypes = {
  avatar: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
