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

export const convertDate = (timeStamp) => {
  const months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

  let day = timeStamp.slice(8, 10);
  if (day[0] === `0`) {
    day = day.substr(1);
  }

  let monthNumber = timeStamp.slice(5, 7);
  if (monthNumber[0] === `0`) {
    monthNumber = monthNumber.substr(1);
  }
  const monthName = months[monthNumber - 1];

  const year = timeStamp.slice(0, 4);

  const date = `${monthName} ${day}, ${year}`;
  return date;
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getTimeElapsed = (duration, progress) => {
  const delta = duration - progress;
  const timeElapsed = new Date(delta * 1000).toISOString().substr(11, 8);
  return timeElapsed;
};

export const convertRunTime = (minutes) => {
  let runTime = ``;

  if (minutes < 60) {
    runTime = `${minutes}m`;
  } else {
    const runTimeHours = Math.floor(minutes / 60);
    const runTimeMinutes = minutes % 60;
    runTime = `${runTimeHours}h ${runTimeMinutes}m`;
  }

  return runTime;
};

export const convertRatingStarsToNumber = (ratingStars) => {
  return ratingStars * 2;
};
