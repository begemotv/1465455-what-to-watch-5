import React from "react";
<<<<<<< HEAD
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
=======
import {Switch, Route, BrowserRouter} from "react-router-dom";

import WelcomeScreen from "../welcome-screen/welcome-screen";
import GameOverScreen from "../game-over-screen/game-over-screen";
import LoginScreen from "../login-screen/login-screen";
import WinScreen from "../win-screen/win-screen";
import GameScreen from "../game-screen/game-screen";
import {MAX_MISTAKE_COUNT} from "../../const";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <WelcomeScreen
              onPlayButtonClick={() => history.push(`/game`)}
              errorsCount={MAX_MISTAKE_COUNT}
            />
          )}
        />
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact
          path="/result"
          render={({history}) => (
            <WinScreen
              onReplayButtonClick={() => history.push(`/game`)}
            />
          )}
        />
        <Route exact
          path="/lose"
          render={({history}) => (
            <GameOverScreen
              onReplayButtonClick={() => history.push(`/game`)}
            />
          )}
        />
        <Route exact path="/game">
          <GameScreen
            errorsCount={MAX_MISTAKE_COUNT}
          />
        </Route>
      </Switch>
    </BrowserRouter>

  );
};

App.propTypes = {};
>>>>>>> 3e39f65b14999c75186ea351aa625f32717198cd

export default App;
