import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import { withRouter } from 'react-router';
import App from './App'
import ScrollToTop from 'components/Scroll';

const AppWithRouter = withRouter(App);

render(
    <Router>
        <ScrollToTop />
        <AppWithRouter/>
    </Router>,
    document.getElementById('root')
);
