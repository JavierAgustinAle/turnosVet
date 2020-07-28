import React, { Component } from 'react';

// Components
import Header from './Components/Header';
import AddNew from './Components/AddNew';
import List from './Components/List';


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

  borrarCita = id => {
    const citasActuales = [...this.state.citas];

    const citas = citasActuales.filter(cita => cita.id !== id);

    this.setState({
      citas: citas
    })
  }

  render() {
    return (
      <div className="container">
        <Header
          title={'Manage your appointments'}
        />
        <div className="row">
          <div className="col-md-6">
            <AddNew
              crearCita={this.crearCita}
            />
          </div>
          <div className="col-md-6">
            <List
              citas={this.state.citas}
              borrarCita={this.borrarCita}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
