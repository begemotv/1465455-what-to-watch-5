import React from "react";
import MainScreen from "../main-screen/main-screen";
import PropTypes from "prop-types";


const App = (props) => {
  const {title, genre, releaseYear} = props;

  return (
    <MainScreen title={title} genre={genre} releaseYear={releaseYear} />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired
};

export default App;
