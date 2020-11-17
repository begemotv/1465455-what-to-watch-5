import React from "react";
import PropTypes from "prop-types";
import {Router as BrowserRouter, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";

import {filmPropTypes, reviewPropTypes} from "../../prop-types";
import MainScreen from "../main-screen/main-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import FilmScreen from "../film-screen/film-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import PlayerScreen from "../player-screen/player-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import PrivateRoute from "../private-route/private-route";
import withVideo from "../../hocs/with-video/with-video";
import {getFilms, getReviews} from "../../store/selectors";
import {AppRoute} from "../../const";
import browserHistory from "../../browser-history";
import {fetchFilm} from "../../store/api-actions/api-actions";

const PlayerScreenHOC = withVideo(PlayerScreen);

const App = (props) => {
  const {getActiveFilm, films, reviews} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route
          exact
          path={AppRoute.ROOT}
          render={({history}) => (
            <MainScreen
              film={films[0]}
              films={films}
              handlePlayBtnClick={(id) => history.push(AppRoute.PLAYER + id)}
              handleMyListBtnClick={() => history.push(AppRoute.MYLIST)}
            />
          )}>
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignInScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MYLIST}
          render={() => {
            return (
              <MyListScreen films={films} />
            );
          }}
        />
        <Route
          exact
          path={AppRoute.FILMS_ID}
          render={({history, match}) => (
            <FilmScreen
              films={films}
              // film={getActiveFilm(match.params.id)}
              film={films[films.findIndex((film) => match.params.id === film.id.toString())]}
              handlePlayBtnClick={(id) => history.push(AppRoute.PLAYER + id)}
              handleMyListBtnClick={() => history.push(AppRoute.MYLIST)}
              reviews={reviews}
            />
          )}
        >
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FILMS_ID_REVIEW}
          render={({match}) => (
            <AddReviewScreen
              film={films[films.findIndex((film) => match.params.id === film.id.toString())]}
              onCommentAdd={() => {}}
            />
          )}
        />
        <Route
          exact
          path={AppRoute.PLAYER_ID}
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
  getActiveFilm: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes)
  ).isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewPropTypes)
  ).isRequired
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  reviews: getReviews(state),
});

const mapDispatchToProps = (dispatch) => ({
  getActiveFilm(id) {
    dispatch(fetchFilm(id));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
