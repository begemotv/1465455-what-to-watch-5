import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {reviewPropTypes} from "../../prop-types";
import {fetchFilmReviews} from "../../store/api-actions/api-actions";
import Preloader from "../../components/preloader/preloader";

const withReviewsLoaded = (Component) => {
  class WithReviewsLoaded extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        reviews: null,
        isFetching: true,
      };
    }

    componentDidMount() {
      const {id, getActiveReviews} = this.props;
      getActiveReviews(id);
    }

    componentDidUpdate(prevProps) {
      const prevId = prevProps.id;
      const prevReviews = prevProps.activeFilmReviews;
      const {id, activeFilmReviews, getActiveReviews} = this.props;

      if (prevReviews !== activeFilmReviews) {
        this.setState({reviews: activeFilmReviews, isFetching: false});
      }

      if (id !== prevId) {
        getActiveReviews(id);
      }
    }

    render() {
      const {reviews, isFetching} = this.state;

      return (
        <div>
          {isFetching ? <Preloader /> : <Component {...this.props} reviews={reviews} />}
        </div>
      );
    }
  }

  WithReviewsLoaded.propTypes = {
    id: PropTypes.number,
    activeFilmReviews: PropTypes.arrayOf(
        PropTypes.shape(reviewPropTypes)
    ),
    getActiveReviews: PropTypes.func.isRequired,
  };

  const mapStateToProps = ({DATA}) => ({
    activeFilmReviews: DATA.activeFilmReviews,
  });

  const mapDispatchToProps = (dispatch) => ({
    getActiveReviews(id) {
      dispatch(fetchFilmReviews(id));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithReviewsLoaded);
};

export {withReviewsLoaded};
export default withReviewsLoaded;
