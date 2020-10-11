import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import FilmScreen from "../film-screen/film-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import PlayerScreen from "../player-screen/player-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";


const App = (props) => {
  const {mainFilm, films, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={({history}) => (
            <MainScreen
              mainFilm={mainFilm}
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
              film={films[films.length]}
              handlePlayBtnClick={() => history.push(`/player/:id`)}
              handleFilmCardClick={() => history.push(`/films/:id`)}
              handleMyListBtnClick={() => history.push(`/mylist`)}
            />
          )}
        >
        </Route>
        <Route exact path="/films/:id/review">
          <AddReviewScreen
            film={films[films.length]}
            review={reviews[reviews.length]}
            onCommentAdd={() => {}}
          />
        </Route>
        <Route exact path="/player/:id">
          <PlayerScreen
            film={films[films.length]}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  mainFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
  }),
  films: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired
};

export default App;
