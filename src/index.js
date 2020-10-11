import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import films from "./mocks/films";
import reviews from "./mocks/reviews";

const MainFilmData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseYear: 2014
};

// console.log(films);
// console.log(reviews);

// let name2 = `Lost in Translation`;
// let filteredReviews = reviews.filter(review => review.name.includes(name2));

// console.log(filteredReviews)

ReactDOM.render(
    <App
      mainFilm={MainFilmData} films={films} reviews={reviews}
    />,
    document.querySelector(`#root`)
);
