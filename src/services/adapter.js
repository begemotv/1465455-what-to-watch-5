import {nameRating, convertRunTime} from "../utils";

export const adaptFilmToClient = (film) => ({
  backgroundColor: film.background_color,
  backgroundImage: film.background_image,
  description: film.description,
  director: film.director,
  genre: film.genre,
  id: film.id,
  isFavorite: film.is_favorite,
  name: film.name,
  poster: film.poster_image,
  previewImg: film.preview_image,
  rating: film.rating,
  ratingName: nameRating(film.rating),
  releaseYear: film.released,
  runningTime: convertRunTime(film.run_time),
  starring: film.starring,
  videoSrc: film.video_link,
  videoSrcTrailer: film.preview_video_link,
  voteCount: film.scores_count,
});

