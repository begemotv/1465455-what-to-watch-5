import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import MainScreen from "../main-screen/main-screen";
||||||| 26e337e
import MainScreen from "../main-screen/main-screen";
=======
>>>>>>> ee660ffdecdc90dda74bb9322862d801d49f6796
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {filmPropTypes, reviewPropTypes} from "../../prop-types";
import MainScreen from "../main-screen/main-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import FilmScreen from "../film-screen/film-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import PlayerScreen from "../player-screen/player-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import withVideo from "../../hocs/with-video/with-video";

const PlayerScreenHOC = withVideo(PlayerScreen);

const App = (props) => {
  const {films, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={({history}) => (
            <MainScreen
              film={films[0]}
              films={films}
              handlePlayBtnClick={(id) => history.push(`/player/${id}`)}
              handleMyListBtnClick={() => history.push(`/mylist`)}
            />
          )}>
        </Route>
        <Route exact path="/login">
          <SignInScreen />
        </Route>
        <Route
          exact
          path="/mylist"
        >
          <MyListScreen
            films={films}
          />
        </Route>
        <Route
          exact
          path="/films/:id"
          render={({history, match}) => (
            <FilmScreen
              films={films}
              film={films[films.findIndex((film) => match.params.id === film.id.toString())]}
              handlePlayBtnClick={(id) => history.push(`/player/${id}`)}
              handleMyListBtnClick={() => history.push(`/mylist`)}
              reviews={reviews}
            />
          )}
        >
        </Route>
        <Route
          exact
          path="/films/:id/review"
          render={({match}) => (
            <AddReviewScreen
              film={films[films.findIndex((film) => match.params.id === film.id.toString())]}
              onCommentAdd={() => {}}
            />
          )}
        >
        </Route>
        <Route
          exact
          path="/player/:id"
          render={({match}) => (
            <PlayerScreenHOC
              film={films[films.findIndex((film) => match.params.id === film.id.toString())]}
            />
          )}
        >
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes)
  ).isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewPropTypes)
  ).isRequired
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
