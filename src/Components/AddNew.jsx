import React, { Component } from 'react';
import uuid from 'uuid'; // Genera el ID aleatorio
import PropTypes from 'prop-types';

class AddNew extends Component {
    state = {}

    petRef = React.createRef();
    ownerRef = React.createRef();
    dateRef = React.createRef();
    timeRef = React.createRef();
    symptomsRef = React.createRef();


    crearNuevaCita = e => {
        e.preventDefault();

        const pet = this.petRef.current.value,
            owner = this.ownerRef.current.value,
            date = this.dateRef.current.value,
            time = this.timeRef.current.value,
            symptoms = this.symptomsRef.current.value;


        const nuevaCita = {
            id: uuid(),
            pet: pet,
            owner: owner,
            date: date,
            time: time,
            symptoms: symptoms
        }

        this.props.crearCita(nuevaCita);

        e.currentTarget.reset();
    }



    render() {
        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Add Appointments Here!
                    </h2>
                    <form onSubmit={this.crearNuevaCita}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Pet's Name*</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" className="form-control" ref={this.petRef} placeholder="Pet's Name" required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Owner's Name*</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" ref={this.ownerRef} className="form-control" placeholder="Owner's Name" required />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Date*</label>
                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                <input type="date" ref={this.dateRef} className="form-control" required />
                            </div>

                            <label className="col-sm-4 col-lg-2 col-form-label">Time*</label>
                            <div className="col-sm-8 col-lg-4">
                                <input type="time" ref={this.timeRef} className="form-control" required />
                            </div>
                        </div><br />
                        <div className="form-group row">
                            <label className="col-sm-5 col-lg-3 col-form-label">
                                Symptoms*</label>
                            <div className="col-sm-7 col-lg-7">
                                <textarea className="form-control" ref={this.symptomsRef} required></textarea>
                            </div>
                        </div>
                        <br />
                        <div className="form-group row justify-content-end">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-success w-100">Add</button>
                            </div>
                        </div>
                    </form>
                    <small>* Required Field</small>
                </div>
            </div>
        )
    }
}

AddNew.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default AddNew;