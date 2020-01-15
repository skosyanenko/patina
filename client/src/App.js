import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { withRouter } from 'react-router';

import PatinaPage from './pages'
import BooksPage from './pages/books'
import BookPage from './pages/book'
import EventsPage from './pages/events'
import TopsPage from './pages/tops'
import TopPage from './pages/top'
import NewsPage from './pages/news'
import NewPage from './pages/new'
import ReviewsPage from './pages/reviews'
import ReviewPage from './pages/review'
import SearchPage from './pages/search'
import RegistrationPage from './pages/registration'
import ProfileHomePage from './pages/profile-home'
import ProfileFollowingPage from './pages/profile-following';
import FormBookPage from './pages/form-book';
import FormReviewPage from './pages/form-review';
import FormTopsPage from './pages/form-tops';
import FormEventsPage from './pages/form-events';
import FormNewsPage from './pages/form-news';
import FormAuthorPage from './pages/form-author';
import FormFilmsPage from './pages/form-films';
import FormCategoriesPage from './pages/form-categories';
import UndefinedPage from './pages/404'
import Main from './main';

const routes = [
    {path: '/', component: PatinaPage},
    {path: '/books', component: BooksPage},
    {path: '/book', component: BookPage},
    {path: '/events', component: EventsPage},
    {path: '/tops', component: TopsPage},
    {path: '/top', component: TopPage},
    {path: '/news', component: NewsPage},
    {path: '/new', component: NewPage},
    {path: '/reviews', component: ReviewsPage},
    {path: '/review', component: ReviewPage},
    {path: '/search', component: SearchPage},
    {path: '/registration', component: RegistrationPage},
    {path: '/profile-home', component: ProfileHomePage},
    {path: '/profile-following', component: ProfileFollowingPage},
    {path: '/form-book', component: FormBookPage},
    {path: '/form-review', component: FormReviewPage},
    {path: '/form-tops', component: FormTopsPage},
    {path: '/form-events', component: FormEventsPage},
    {path: '/form-news', component: FormNewsPage},
    {path: '/form-author', component: FormAuthorPage},
    {path: '/form-films', component: FormFilmsPage},
    {path: '/form-categories', component: FormCategoriesPage},
    {path: '*', component: UndefinedPage}
];

const MainComponent = withRouter(Main);

const App = () => (
    <Router>
        <MainComponent routes={routes}/>
    </Router>
);

export default App