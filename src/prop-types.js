import PropTypes from 'prop-types';

export const filmPropTypes = {
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
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
  voteCount: PropTypes.number.isRequired
};

export const reviewPropTypes = {
  name: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        rating: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
      })
  ).isRequired
};

