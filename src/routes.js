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

export const routes = [
    { path: '/', exact: true, component: PatinaPage },
    { path: '/books', exact: true, component: BooksList, group: 'nav' },
    { path: '/books/:id', exact: true, component: BooksDetail },
    { path: '/charts', exact: true, component: ChartsList, group: 'nav' },
    { path: '/charts/:id', exact: true, component: ChartsDetail },
    { path: '/reviews', exact: true, component: ReviewsList, group: 'nav' },
    { path: '/reviews/:id', exact: true, component: ReviewsDetail },
    { path: '/events', exact: true, component: EventsList, group: 'nav' },
    { path: '/news', exact: true, component: NewsList, group: 'nav' },
    { path: '/news/:id', exact: true, component: NewsDetail },
    { path: '/search', exact: true, component: SearchList },
    { path: '/search/:id', exact: true, component: SearchList },
    { path: '/search?q=val', exact: true, component: SearchList },
    { path: '/form/:type', exact: true, component: AddForm },
    { path: '/profile/:page', exact: true, component: Profile },
    { path: '/control', exact: true, component: ControlList },
    { path: '/control/:type', exact: true, component: AddForm }
];