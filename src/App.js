import React, { Component } from 'react';
import {} from 'react-router-dom';

import Gallery from './containers/Gallery/Gallery';
import Groups from './containers/Groups/Groups';
// import Search from './components/Search';

class App extends Component {
  
  render() {
    return (
      <div>
        {/* <Search /> */}
        <Groups />
        <Gallery />
      </div>
    );
  }
}

export default App;
