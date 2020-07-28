import React from 'react';
// Component
import Appointment from './Appointment';


const List = props => {
    const citas = props.citas;
    const message = Object.keys(citas).length === 0 ? 'No Appointments' : 'Manage your appointments here'

    return (
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center">
                    {message}
                </h2>
                <div className="lista-citas">
                    {Object.keys(props.citas).map(cita => (
                        <Appointment
                            key={cita}
                            data={props.citas[cita]}
                            borrarCita={props.borrarCita}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default List;