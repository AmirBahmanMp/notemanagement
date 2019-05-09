import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';
import FormItem from '../FormItem/FormItem';
import FormEdit from '../FormEdit/FormEdit'

import './Content.css'

class Content extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
        editingItem: PropTypes.shape({
            value: PropTypes.string,
            id: PropTypes.number,
        }),
        handleAddItem: PropTypes.func.isRequired,
        handleDeleteItem: PropTypes.func.isRequired,
        handleCancelEditItem: PropTypes.func.isRequired,
        handleSelectEditItem: PropTypes.func.isRequired,
        handleEditItem: PropTypes.func.isRequired
    };
    static defaultProps = {
        items: [],
        editingItem: {}
    };

    render() {
        return (
            <div className="content">
                <div className="content__Form">
                    <div className="content__card">
                        <h4 className="content__title">Welcome!</h4>
                        <p className="content__subtitle">To get started, add some items to your list:</p>
                        <div>
                            <Form handleAddItem={this.props.handleAddItem}/>
                        </div>
                    </div>
                </div>
                {this.props.items.length ? (
                    <ul className="content__list-group">
                        {this.props.items.map(item => (
                            <div className="content__notes__li" key={item.id}>
                                {this.props.editingItem.id === item.id ? (
                                    <FormEdit
                                        item={this.props.editingItem}
                                        handleEditItem={this.props.handleEditItem}
                                        handleCancelEditItem={this.props.handleCancelEditItem}
                                    />
                                ) : (
                                    <FormItem
                                        item={item}
                                        handleDeleteItem={this.props.handleDeleteItem}
                                        handleSelectEditItem={this.props.handleSelectEditItem}
                                    />
                                )}
                            </div>
                        ))}
                    </ul>
                ) : null}
            </div>
        )
    }
}

export default Content;