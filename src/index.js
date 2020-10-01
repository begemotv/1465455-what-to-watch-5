import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const MainMovieData = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE_YEAR: 2014

};

ReactDOM.render(
    <App
      title={MainMovieData.TITLE} genre={MainMovieData.GENRE} releaseYear={MainMovieData.RELEASE_YEAR}
    />,
    document.querySelector(`#root`)
);
