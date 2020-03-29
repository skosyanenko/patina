import PatinaPage from './pages/IndexList'
import BooksPage from './pages/BooksList'
import BookPage from './pages/BooksDetail'
import TopsPage from './pages/TopsList'
import TopPage from './pages/TopsDetail'
import ReviewsPage from './pages/ReviewsList'
import ReviewPage from './pages/ReviewsDetail'
import EventsPage from './pages/EventsList'
import NewsPage from './pages/NewsList'
import NewPage from './pages/NewsDetail'
import SearchPage from './pages/SearchList'
import Profile from './pages/Profile'
import AddForm from './pages/Forms';
import ControlPage from './pages/ControlList';
import UndefinedPage from './pages/UndefinedPage';

export const routes = [
    { path: '/', component: PatinaPage },
    { path: '/books', component: BooksPage },
    { path: '/books/:id', component: BookPage },
    { path: '/charts', component: TopsPage },
    { path: '/charts/:id', component: TopPage },
    { path: '/reviews', component: ReviewsPage },
    { path: '/reviews/:id', component: ReviewPage },
    { path: '/events', component: EventsPage },
    { path: '/news', component: NewsPage },
    { path: '/news/:id', component: NewPage },
    { path: '/search', component: SearchPage },
    { path: '/search/:id', component: SearchPage },
    { path: '/form/:type', component: AddForm },
    { path: '/profile/:page', component: Profile },
    { path: '/control', component: ControlPage },
    { path: '/control/:type', component: AddForm },
    { path: '*', component: UndefinedPage }
];