import React from 'react';

import './App.css';

import Header from '../Header/Header';
import Content from '../Content/Content';

const App = props => (
    <div className="app__container">
        <Header />
        <Content {...props} />
    </div>
);

export default App;
