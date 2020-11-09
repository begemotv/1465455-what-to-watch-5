import films from "./mocks/films";

export const filterFilmsByGenre = (genre, id) => {
  let genreFilms = films;

  if (genre !== `All genres`) {
    genreFilms = films
    .filter((item) => genre.includes(item.genre))
    .filter((item) => item.id !== id);
  }

  return genreFilms;
};

