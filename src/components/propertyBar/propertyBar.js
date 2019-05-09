import React from 'react';
import PropTypes from 'prop-types';

import './propertyBar.css';

const propertyBarPropTypes = {
    id: PropTypes.number.isRequired,
    handleDeleteItem: PropTypes.func.isRequired,
    handleSelectEditItem: PropTypes.func.isRequired
};

const PropertyBar = props => (
    <div className="property_bar__component">
        <button
            className="property_bar__button button button__edit"
            onClick={() => props.handleSelectEditItem(props.id)}>
            Edit
        </button>
        <button
            className="property_bar__button button button__delete"
            onClick={() => props.handleDeleteItem(props.id)}>
            Delete
        </button>
    </div>
);

PropertyBar.prototype = propertyBarPropTypes;

export default PropertyBar;