import React from "react";
import PropTypes from "prop-types";
import {Router as BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import AddReviewScreen from "../add-review-screen/add-review-screen";
import ErrorServer from "../error-server/error-server";
import ErrorNotFound from "../error-not-found/error-not-found";
import FilmScreen from "../film-screen/film-screen";
import MainScreen from "../main-screen/main-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import PlayerScreen from "../player-screen/player-screen";
import PrivateRoute from "../private-route/private-route";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import browserHistory from "../../browser-history";
import withVideo from "../../hocs/with-video/with-video";
import {AppRoute, AuthorizationStatus} from "../../const";
import {filmPropTypes} from "../../prop-types";

const PlayerScreenHOC = withVideo(PlayerScreen);

const App = (props) => {
  const {authorizationStatus, promoFilm} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route
          exact
          path={AppRoute.ROOT}
          render={({history}) => (
            <MainScreen
              film={promoFilm}
              handlePlayButtonClick={(id) => history.push(`${AppRoute.PLAYER}${id}`)}
            />
          )}>
        </Route>
        <Route
          exact
          path={AppRoute.LOGIN}>
          {authorizationStatus === AuthorizationStatus.AUTH
            ? <Redirect to={AppRoute.ROOT} />
            : <SignInScreen />}
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
            <FilmScreen
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
            <AddReviewScreen id={match.params.id}/>
          )}>
        </PrivateRoute>
        <Route
          exact
          path={AppRoute.PLAYER_ID}
          render={({match}) => (
            <PlayerScreenHOC id={match.params.id} />
          )}
        >
        </Route>
        <Route
          exact
          path={AppRoute.SERVER_ERROR}>
          <ErrorServer />
        </Route>
        <Route component={ErrorNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  promoFilm: PropTypes.shape(filmPropTypes).isRequired,
};

const mapStateToProps = ({DATA, USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  promoFilm: DATA.filmPromo,
});

export {App};
export default connect(mapStateToProps)(App);
