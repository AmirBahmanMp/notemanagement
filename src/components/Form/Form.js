import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Form.css';

export default class Form extends Component {
    static propTypes = {
        handleAddItem: PropTypes.func.isRequired,
    };

    state = {item: ''};

    handleItemChange = e =>
        this.setState({
            item: e.target.value
        });

    handleSubmit = e => {
        e.preventDefault();

        this.props.handleAddItem(this.state.item);

        return this.setState({
            item: ''
        })
    };

    render() {
        return (
            <div>
                <form method="POST" onSubmit={this.handleSubmit}>
                    <div className="Form__container">
                        <div>
                            <input
                                type="text"
                                className="input"
                                id="new-note-item"
                                name="new-note-item"
                                placeholder="write a new note"
                                value={this.state.item}
                                onChange={this.handleItemChange}
                                autoFocus
                            />
                        </div>

                        <div className="Form__button">
                            <button
                                type="submit"
                                className="button"
                                disabled={!this.state.item}
                                aria-label="Add note item"> Add
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}