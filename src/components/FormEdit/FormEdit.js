import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './FormEdit.css';

export default class FormEdit extends Component {
    static propTypes = {
        item: PropTypes.shape({
            value: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        }),
        handleEditItem: PropTypes.func.isRequired,
        handleCancelEditItem: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            item: props.item.value,
        };
    }

    handleItemChange = e =>
        this.setState({
            item: e.target.value
        });

    handleEdit = e => {
        e.preventDefault();

        this.props.handleEditItem({
            ...this.props.item,
            value: this.state.item
        });

        return this.setState({item: ''})
    };

    render() {
        return (
            <li className="form_edit__component form_edit__list-group-item">
                <form method='POST' onSubmit={this.handleEdit}>
                    <div>
                        <div className="form_edit__container">
                            <input
                                type="text"
                                className="input"
                                id="edit-note-item"
                                name="edit-note-item"
                                value={this.state.item}
                                onChange={this.handleItemChange}
                                autoFocus
                            />
                            <div>
                                <button
                                    type="submit"
                                    className="button button__confirm"
                                    id="submit-edit-note-item"
                                    disabled={!this.state.item}>
                                    confirm
                                </button>
                                <button
                                    type="button"
                                    className="button button__cancel"
                                    id="cancel-edit-note-item"
                                    onClick={this.props.handleCancelEditItem}>
                                    cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </form>

            </li>
        )
    }
}