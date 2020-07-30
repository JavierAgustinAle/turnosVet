import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import BtnDelete from './BtnDelete';

class Appointment extends Component {
    render() {
        const { date, owner, pet, symptoms, time } = this.props.data
        return (
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">{pet}</h3>
                    <p className="card-text"><span>Owner:</span>{owner}</p>
                    <p className="card-text"><span>Date:</span>{date}</p>
                    <p className="card-text"><span>Time:</span>{time}</p>
                    <p className="card-text"><span>Symptoms: </span></p>
                    <p className="card-text">{symptoms}</p>

                    < BtnDelete
                        id={this.props.data.id}
                        borrarCita={this.props.borrarCita}
                    />
                </div>
            </div>
        )
    }
}

Appointment.proptType = {
    data: PropTypes.shape({
        pet: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        symptoms: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }),
    borrarCita: PropTypes.func.isRequired
}

export default Appointment;