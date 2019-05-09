import {combineReducers} from 'redux';

import NotesReducer from './Notes';

const AppReducer = combineReducers({
    notes: NotesReducer
});

export default AppReducer;