import React from "react";
import PropTypes from "prop-types";
import {Router as BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
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
import withFilmLoaded from "../../hocs/with-film-loaded/with-film-loaded";
import {getFilms} from "../../store/selectors";
import {AppRoute, AuthorizationStatus} from "../../const";
import browserHistory from "../../browser-history";
import {NameSpace} from "../../store/reducers";

const PlayerScreenHOC = withFilmLoaded(withVideo(PlayerScreen));
const FilmScreenHOC = withFilmLoaded(FilmScreen);
const MainScreenHOC = withFilmLoaded(MainScreen);
const AddReviewScreenHOC = withFilmLoaded(AddReviewScreen);

const App = (props) => {
  const {authorizationStatus, films} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route
          exact
          path={AppRoute.ROOT}
          render={({history}) => (
            <MainScreenHOC
              handlePlayBtnClick={(id) => history.push(`${AppRoute.PLAYER}${id}`)}
              handleMyListBtnClick={() => history.push(AppRoute.MYLIST)}
            />
          )}>
        </Route>
        <Route
          exact
          path={AppRoute.LOGIN}>
          {authorizationStatus === AuthorizationStatus.AUTH
            ? <Redirect to={AppRoute.ROOT} /> : <SignInScreen />}
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
            <FilmScreenHOC
              id={match.params.id}
              handlePlayBtnClick={(id) => history.push(`${AppRoute.PLAYER}${id}`)}
              handleMyListBtnClick={() => history.push(AppRoute.MYLIST)}
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
              onCommentAdd={() => {}}
            />
          )}
        />
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
  films: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes)
  ).isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state[NameSpace.USER].authorizationStatus,
  films: getFilms(state),
});

export {App};
export default connect(mapStateToProps)(App);
