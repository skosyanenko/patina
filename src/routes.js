import PatinaPage from './pages/IndexList'
import BooksList from './pages/BooksList'
import BooksDetail from './pages/BooksDetail'
import ChartsList from './pages/ChartsList'
import ChartsDetail from './pages/ChartsDetail'
import ReviewsList from './pages/ReviewsList'
import ReviewsDetail from './pages/ReviewsDetail'
import EventsList from './pages/EventsList'
import NewsList from './pages/NewsList'
import NewsDetail from './pages/NewsDetail'
import SearchList from './pages/SearchList'
import Profile from './pages/Profile'
import AddForm from './pages/Forms';
import ControlList from './pages/ControlList';
import UndefinedPage from './pages/UndefinedPage';

export const routes = [
    { path: '/', component: PatinaPage },
    { path: '/books', component: BooksList },
    { path: '/books/:id', component: BooksDetail },
    { path: '/charts', component: ChartsList },
    { path: '/charts/:id', component: ChartsDetail },
    { path: '/reviews', component: ReviewsList },
    { path: '/reviews/:id', component: ReviewsDetail },
    { path: '/events', component: EventsList },
    { path: '/news', component: NewsList },
    { path: '/news/:id', component: NewsDetail },
    { path: '/search', component: SearchList },
    { path: '/search/:id', component: SearchList },
    { path: '/search?q=val', component: SearchList },
    { path: '/form/:type', component: AddForm },
    { path: '/profile/:page', component: Profile },
    { path: '/control', component: ControlList },
    { path: '/control/:type', component: AddForm },
    { path: '*', component: UndefinedPage }
];