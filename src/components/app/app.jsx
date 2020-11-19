import React from "react";
import PropTypes from "prop-types";
import {Router as BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import AddReviewScreen from "../add-review-screen/add-review-screen";
import FilmScreen from "../film-screen/film-screen";
import MainScreen from "../main-screen/main-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import PlayerScreen from "../player-screen/player-screen";
import PrivateRoute from "../private-route/private-route";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import browserHistory from "../../browser-history";
import withVideo from "../../hocs/with-video/with-video";
import withFilmLoaded from "../../hocs/with-film-loaded/with-film-loaded";
import withError from "../../hocs/with-error/with-error";
import {AppRoute, AuthorizationStatus} from "../../const";
import {NameSpace} from "../../store/reducers";

const AddReviewScreenHOC = withFilmLoaded(AddReviewScreen);
const FilmScreenHOC = withFilmLoaded(FilmScreen);
const MainScreenHOC = withFilmLoaded(MainScreen);
const PlayerScreenHOC = withFilmLoaded(withVideo(PlayerScreen));
const SignInScreenHOC = withError(SignInScreen);

const App = (props) => {
  const {authorizationStatus} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route
          exact
          path={AppRoute.ROOT}
          render={({history}) => (
            <MainScreenHOC
              handlePlayButtonClick={(id) => history.push(`${AppRoute.PLAYER}${id}`)}
            />
          )}>
        </Route>
        <Route
          exact
          path={AppRoute.LOGIN}>
          {authorizationStatus === AuthorizationStatus.AUTH
            ? <Redirect to={AppRoute.ROOT} /> : <SignInScreenHOC />}
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MYLIST}
          render={() => (
            <MyListScreen />
          )}>
        </PrivateRoute>
        <Route
          exact
          path={AppRoute.FILMS_ID}
          render={({history, match}) => (
            <FilmScreenHOC
              id={match.params.id}
              handlePlayButtonClick={(id) => history.push(`${AppRoute.PLAYER}${id}`)}
            />
          )}
        >
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FILMS_ID_REVIEW}
          render={({match}) => (
            <AddReviewScreenHOC
              id={match.params.id}
            />
          )}>
        </PrivateRoute>
        <Route
          exact
          path={AppRoute.PLAYER_ID}
          render={({match}) => (
            <PlayerScreenHOC
              id={match.params.id}
            />
          )}
        >
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state[NameSpace.USER].authorizationStatus,
});

export {App};
export default connect(mapStateToProps)(App);
