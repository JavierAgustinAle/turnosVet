import React, { Component } from 'react';

// Components
import Header from './Components/Header';
import AddNew from './Components/AddNew';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Header
          title={'Manage appointments'}
        />
        <div className="row">
          <div className="col-md-6">
            <AddNew />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
