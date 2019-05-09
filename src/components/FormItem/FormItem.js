import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './FormItem.css';
import PropertyBar from "../propertyBar/propertyBar";

export default class FormItem extends Component {
    static propTypes = {
        item: PropTypes.shape({
            value: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        }),
        handleDeleteItem: PropTypes.func.isRequired,
        handleSelectEditItem: PropTypes.func.isRequired
    };

    setDisplayMenu = bool => {
        if (this.state.displayMenu !== bool) {
            this.setState({displayMenu: bool})
        }
    };

    state = {displayMenu: false};

    render() {
        return (
            <li onMouseMove={() => this.setDisplayMenu(true)}
                onMouseLeave={() => this.setDisplayMenu(false)}
                className="form_item__list-group-item form_item__component">
                <div>
                    <span className="form_item__text">{this.props.item.value}</span>
                </div>
                {this.state.displayMenu ? (
                    <PropertyBar
                        id={this.props.item.id}
                        handleDeleteItem={this.props.handleDeleteItem}
                        handleSelectEditItem={this.props.handleSelectEditItem}
                    />
                ) : null}
            </li>
        )
    }
}