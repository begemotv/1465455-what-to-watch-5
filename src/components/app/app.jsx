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
              handlePlayBtnClick={() => history.push(`/player/:id`)}
              handleFilmCardClick={() => history.push(`/films/:id`)}
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
              handleFilmCardClick={() => history.push(`/films/:id`)}
            />
          )}>
        </Route>
        <Route
          exact
          path="/films/:id"
          render={({history}) => (
            <FilmScreen
              films={films}
              film={films[0]}
              handlePlayBtnClick={() => history.push(`/player/:id`)}
              handleFilmCardClick={() => history.push(`/films/:id`)}
              handleMyListBtnClick={() => history.push(`/mylist`)}
            />
          )}
        >
        </Route>
        <Route exact path="/films/:id/review">
          <AddReviewScreen
            film={films[0]}
            onCommentAdd={() => {}}
          />
        </Route>
        <Route exact path="/player/:id">
          <PlayerScreen
            film={films[0]}
          />
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
