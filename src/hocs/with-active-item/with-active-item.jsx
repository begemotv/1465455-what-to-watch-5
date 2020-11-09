import React, {PureComponent} from "react";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: 0
      };

      this.handleActiveItemChange = this._handleActiveItemChange.bind(this);
      this.handleActiveItemRemove = this._handleActiveItemRemove.bind(this);
    }

    _handleActiveItemChange(id) {
      this.setState({activeItem: id});
    }

    _handleActiveItemRemove() {
      this.setState({activeItem: 0});
    }

    render() {
      return (
        <Component
          {...this.props}
          activeItem={this.state.activeItem}
          onItemInteraction={this.handleActiveItemChange}
          onItemInteractionEnd={this.handleActiveItemRemove}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
