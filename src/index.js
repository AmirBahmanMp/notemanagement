import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

import {Provider} from 'react-redux';
import AppReducer from "./reducers";
import {createStore} from 'redux';

const store = createStore(
    AppReducer,
);

ReactDOM.render(<Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

