import {ADD_ITEM} from "../actions/AddItems";
import {DELETE_ITEM} from "../actions/DeleteItem";
import {EDIT_ITEM} from "../actions/EditItem";
import {CANCEL_EDIT_ITEM} from "../actions/CancelEditItem";
import {SELECT_EDIT_ITEM} from "../actions/SelectedItem";

const INITIAL_STATE = {
    items: []
};

const NotesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ITEM: {
            const id = Math.random();
            const NoteItem = {
                value: action.payload.value,
                id,
            };
            return {...state, items: [...state.items, NoteItem]};
        }

        case CANCEL_EDIT_ITEM: {
            const newState = state.items.length ? {...state, editingItem: {}} : {...state}
            return newState
        }

        case DELETE_ITEM: {
            const items = state.items.filter(({id}) => id !== action.payload.id);
            return {...state, items}
        }

        case SELECT_EDIT_ITEM: {
            const item = state.items.find(({id}) => id === action.payload.id);
            return {...state, editingItem: item}
        }
        case EDIT_ITEM: {
            const items = state.items.map(item => {
                if (item.id === action.payload.modifiedItem.id) {
                    item.value = action.payload.modifiedItem.value;
                }
                return item;
            });
            return {...state, items, editingItem: {}}
        }
        default: {
            return state;
        }
    }
};


export default NotesReducer;