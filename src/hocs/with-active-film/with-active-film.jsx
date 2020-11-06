import React, {PureComponent} from "react";

const withActiveFilm = (Component) => {
  class WithActiveFilm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeFilm: null
      };

      this.handleFilmCardMouseOver = this._handleFilmCardMouseOver.bind(this);
    }

    _handleFilmCardMouseOver(id) {
      this.setState({activeFilm: id});
    }

    render() {
      return (
        <Component
          {...this.props}
          onFilmCardMouseOver={this.handleFilmCardMouseOver}
        />
      );
    }
  }

  return WithActiveFilm;
};

export default withActiveFilm;

