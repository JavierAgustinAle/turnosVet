import React from 'react';


const BtnDelete = props => {
    return (
        <button onClick={() => { props.borrarCita(props.id) }} className="btn btn-danger">
            Delete &times;
        </button>
    )
}

export default BtnDelete;