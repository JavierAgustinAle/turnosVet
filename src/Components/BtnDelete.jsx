import React from 'react';
import PropTypes from 'prop-types';


const BtnDelete = props => {
    return (
        <button onClick={() => { props.borrarCita(props.id) }} className="btn btn-danger">
            Delete &times;
        </button>
    )
}

BtnDelete.propTypes = {
    borrarCita: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
}

export default BtnDelete;