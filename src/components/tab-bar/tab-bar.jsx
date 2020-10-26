import React, {PureComponent} from 'react';

import Tab from "../tab/tab";

class TabBar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: null,
    };
  }

  render() {
    return (
      <nav>
        <Tab />
      </nav>
    );
  }
}

TabBar.propTypes = {

};

export default TabBar;
