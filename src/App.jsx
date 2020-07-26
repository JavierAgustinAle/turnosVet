import React, { Component } from 'react';

// Components
import Header from './Components/Header';
import AddNew from './Components/AddNew';


class App extends Component {

  state = {
    citas: []
  }

  crearCita = (nuevaCita) => {
    const citas = [
      ...this.state.citas,
      nuevaCita
    ];
    this.setState({
      citas: citas
    })

  }

  render() {
    return (
      <div className="container">
        <Header
          title={'Manage appointments'}
        />
        <div className="row">
          <div className="col-md-6">
            <AddNew
              crearCita={this.crearCita}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
