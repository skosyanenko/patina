import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PatinaPage from './pages'
import BooksPage from './pages/books'
import BookPage from './pages/book'
import EventsPage from './pages/events'
import TopsPage from './pages/tops'
import TopPage from './pages/top'
import NewsPage from './pages/news'
import NewPage from './pages/new'
import ReviewPage from './pages/review'
import UndefinedPage from './pages/404'

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={PatinaPage}/>
            <Route exact path="/books" component={BooksPage}/>
            <Route exact path="/book" component={BookPage}/>
            <Route exact path="/events" component={EventsPage}/>
            <Route exact path="/tops" component={TopsPage}/>
            <Route exact path="/top" component={TopPage}/>
            <Route exact path="/news" component={NewsPage}/>
            <Route exact path="/new" component={NewPage}/>
            <Route exact path="/review" component={ReviewPage}/>
            <Route path="*" render={UndefinedPage}/>
        </Switch>
    </Router>
);

export default App