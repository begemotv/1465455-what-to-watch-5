import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import films from "./mocks/films";

const MainMovieData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseYear: 2014
};

console.log(films);

ReactDOM.render(
    <App
      title={MainMovieData.title} genre={MainMovieData.genre} releaseYear={MainMovieData.releaseYear}
    />,
    document.querySelector(`#root`)
);
