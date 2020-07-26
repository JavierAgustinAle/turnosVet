import React, { Component } from 'react';

class AddNew extends Component {
    state = {}

    render() {
        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Add Appointments Here!
                    </h2>
                    <form >
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Pet's Name</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" className="form-control" placeholder="Pet's Name" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Owner's Name</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" className="form-control" placeholder="Owner's Name" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                <input type="date" className="form-control" />
                            </div>

                            <label className="col-sm-4 col-lg-2 col-form-label">Time</label>
                            <div className="col-sm-8 col-lg-4">
                                <input type="time" className="form-control" />
                            </div>
                        </div><br />
                        <div className="form-group row">
                            <label className="col-sm-5 col-lg-3 col-form-label">
                                Symptoms</label>
                            <div className="col-sm-7 col-lg-7">
                                <textarea className="form-control"></textarea>
                            </div>
                        </div>
                        <br />
                        <div className="form-group row justify-content-end">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-success w-100">Add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddNew;