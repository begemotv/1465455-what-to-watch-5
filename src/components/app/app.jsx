import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {filmPropTypes} from "../../prop-types";
import MainScreen from "../main-screen/main-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import FilmScreen from "../film-screen/film-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import PlayerScreen from "../player-screen/player-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";


const App = (props) => {
  const {films} = props;

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
              handleFilmCardClick={(id) => history.push(`/films/${id}`)}
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
          render={({history}) => (
            <MyListScreen
              films={films}
              handleFilmCardClick={(id) => history.push(`/films/${id}`)}
            />
          )}>
        </Route>
        <Route
          exact
          path="/films/:id"
          render={({history, match}) => (
            <FilmScreen
              films={films}
              film={films[films.findIndex((film) => match.params.id === film.id.toString())]}
              handlePlayBtnClick={(id) => history.push(`/player/${id}`)}
              handleFilmCardClick={(id) => history.push(`/films/${id}`)}
              handleMyListBtnClick={() => history.push(`/mylist`)}
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
            <PlayerScreen
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
};

export default App;
