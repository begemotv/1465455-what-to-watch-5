import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import browserHistory from "../../browser-history";

import Preloader from "../../components/preloader/preloader";
import {checkFilmFavorite, getActiveFilmId} from "../../store/selectors";
import {AuthorizationStatus, AppRoute} from "../../const";
import {filmPropTypes} from "../../prop-types";
import {fetchFilm, fetchPromoFilm, addToFavorites} from "../../store/api-actions/api-actions";

const withFilmLoaded = (Component) => {
  class WithFilmLoaded extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        film: null,
        isFavorite: false,
        isFetching: true,
      };

      this.handleFavoriteButton = this._handleFavoriteButton.bind(this);
    }

    componentDidMount() {
      if (this.props.id === undefined) {
        const {getActiveFilmPromo} = this.props;
        getActiveFilmPromo();
      } else {
        const {id, getActiveFilm} = this.props;
        getActiveFilm(id);
      }

      this._handleFavoriteStatusCheck();
    }

    componentDidUpdate(prevProps) {
      if (this.props.id === undefined) {
        const prevFilm = prevProps.activeFilmDetailsPromo;
        const {activeFilmDetailsPromo} = this.props;

        this._handleFavoriteStatusCheck();

        if (prevFilm !== activeFilmDetailsPromo) {
          this.setState({film: activeFilmDetailsPromo, isFetching: false});
        }
      } else {
        const prevId = prevProps.id;
        const prevFilm = prevProps.activeFilmDetails;
        const {id, activeFilmDetails, getActiveFilm} = this.props;

        if (prevFilm !== activeFilmDetails) {
          this.setState({film: activeFilmDetails, isFetching: false});
        }

        if (id !== prevId) {
          getActiveFilm(id);
        }
      }
    }

    _handleFavoriteStatusCheck() {
      const {isFavoriteFilm} = this.props;
      this.setState({isFavorite: isFavoriteFilm});
    }

    _handleFavoriteButton(id, status) {
      const {authorizationStatus} = this.props;
      if (authorizationStatus !== AuthorizationStatus.AUTH) {
        browserHistory.push(AppRoute.LOGIN);
      } else {
        this.setState((prevState) => ({
          isFavorite: !prevState.isFavorite
        }));
        const {addToFavoritesAction} = this.props;
        addToFavoritesAction(id, +status);
      }
    }

    render() {
      const {film, isFavorite, isFetching} = this.state;

      return (
        <div>
          {isFetching
            ? <Preloader />
            : <Component {...this.props} film={film} isFavorite={isFavorite} onButtonClick={this.handleFavoriteButton}/>
          }
        </div>
      );
    }
  }

  WithFilmLoaded.propTypes = {
    activeFilmDetails: PropTypes.shape(filmPropTypes),
    activeFilmDetailsPromo: PropTypes.shape(filmPropTypes),
    addToFavoritesAction: PropTypes.func.isRequired,
    authorizationStatus: PropTypes.string.isRequired,
    getActiveFilm: PropTypes.func.isRequired,
    getActiveFilmPromo: PropTypes.func.isRequired,
    id: PropTypes.string,
    isFavoriteFilm: PropTypes.bool.isRequired,
  };

  const mapStateToProps = (state, {DATA, USER} = state) => ({
    activeFilmDetails: DATA.activeFilmDetails,
    activeFilmDetailsPromo: DATA.activeFilmDetailsPromo,
    authorizationStatus: USER.authorizationStatus,
    idActive: getActiveFilmId(state),
    isFavoriteFilm: checkFilmFavorite(state),
  });

  const mapDispatchToProps = (dispatch) => ({
    getActiveFilm(id) {
      dispatch(fetchFilm(id));
    },
    getActiveFilmPromo() {
      dispatch(fetchPromoFilm());
    },
    addToFavoritesAction(id, status) {
      dispatch(addToFavorites(id, status));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithFilmLoaded);
};

export {withFilmLoaded};
export default withFilmLoaded;
