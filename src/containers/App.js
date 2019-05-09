import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {default as AppLayout} from '../components/Layout/App';

import {AddItem} from "../actions/AddItems";
import {DeleteItem} from "../actions/DeleteItem";
import {CancelEditItem} from "../actions/CancelEditItem";
import {EditItem} from "../actions/EditItem";
import {SelectEditItem} from "../actions/SelectedItem";

const appPropTypes = {
    handleAddItem: PropTypes.func.isRequired,
    handleDeleteItem: PropTypes.func.isRequired,
    handleEditItem: PropTypes.func.isRequired,
    handleSelectEditItem: PropTypes.func.isRequired,
    handleCancelEditItem: PropTypes.func.isRequired,
};

class App extends Component {
    handleAddItem = item => this.props.handleAddItem(item);
    handleDeleteItem = selectedItemId => this.props.handleDeleteItem(selectedItemId);
    handleCancelEditItem = () => this.props.handleCancelEditItem();
    handleSelectedEditItem = id => this.handleSelectedEditItem(id);
    handleEditItem = modifiedItem => this.props.handleEditItem(modifiedItem);

    render() {
        return <AppLayout {...this.props} />
    }
}

const mapStateToProps = state => ({
    items: state.notes.items,
    editingItem: state.notes.editingItem
});

const mapDispatchToProps = {
    handleAddItem: AddItem,
    handleDeleteItem: DeleteItem,
    handleCancelEditItem: CancelEditItem,
    handleEditItem: EditItem,
    handleSelectEditItem: SelectEditItem
};

App.prototypes = appPropTypes;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)