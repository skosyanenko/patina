import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom';
import {withRouter} from 'react-router';
import App from './App'

const AppWithRouter = withRouter(App);

render(
    <Router>
        <AppWithRouter/>
    </Router>,
    document.getElementById('root')
);
