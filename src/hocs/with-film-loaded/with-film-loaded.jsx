import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {filmPropTypes} from "../../prop-types";
import {fetchFilm, fetchPromoFilm} from "../../store/api-actions/api-actions";
import Preloader from "../../components/preloader/preloader";

const withFilmLoaded = (Component) => {
  class WithFilmLoaded extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        film: null,
        isFetching: true,
      };
    }

    componentDidMount() {
      if (this.props.id === undefined) {
        const {getActiveFilmPromo} = this.props;
        getActiveFilmPromo();
      } else {
        const {id, getActiveFilm} = this.props;
        getActiveFilm(id);
      }
    }

    componentDidUpdate(prevProps) {
      if (this.props.id === undefined) {
        const prevFilm = prevProps.activeFilmDetailsPromo;
        const {activeFilmDetailsPromo} = this.props;

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

    render() {
      const {film, isFetching} = this.state;

      return (
        <div>
          {isFetching ? <Preloader /> : <Component {...this.props} film={film} />}
        </div>
      );
    }
  }

  WithFilmLoaded.propTypes = {
    id: PropTypes.string,
    activeFilmDetails: PropTypes.shape(filmPropTypes),
    activeFilmDetailsPromo: PropTypes.shape(filmPropTypes),
    getActiveFilm: PropTypes.func.isRequired,
    getActiveFilmPromo: PropTypes.func.isRequired,
  };

  const mapStateToProps = ({DATA}) => ({
    activeFilmDetails: DATA.activeFilmDetails,
    activeFilmDetailsPromo: DATA.activeFilmDetailsPromo,
  });

  const mapDispatchToProps = (dispatch) => ({
    getActiveFilm(id) {
      dispatch(fetchFilm(id));
    },
    getActiveFilmPromo() {
      dispatch(fetchPromoFilm());
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithFilmLoaded);
};

export {withFilmLoaded};
export default withFilmLoaded;
