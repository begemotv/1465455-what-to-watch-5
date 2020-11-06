import React, {PureComponent} from 'react';

const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: 0,
      };

      this.handleTabClick = this._handleTabClick.bind(this);
    }

    _handleTabClick(i) {
      this.setState({activeTab: i});
    }

    render() {
      return (
        <Component
          {...this.props}
          activeTab={this.state.activeTab}
          onTabClick={this.handleTabClick}
        />
      );
    }
  }

  return WithActiveTab;
};

export default withActiveTab;
