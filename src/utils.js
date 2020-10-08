export const nameRating = (rating) => {
  let ratingName = ``;
  switch (true) {
    case rating >= 0 && rating < 3:
      ratingName = `Bad`;
      break;
    case rating >= 3 && rating < 5:
      ratingName = `Normal`;
      break;
    case rating >= 5 && rating < 8:
      ratingName = `Good`;
      break;
    case rating >= 8 && rating < 10:
      ratingName = `Very good`;
      break;
    case rating === 10:
      ratingName = `Awesome`;
      break;
    default:
      ratingName = `Not rated`;
  }
  return ratingName;
};

