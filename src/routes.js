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
import RegistrationPage from './pages/Registration'
import Profile from './pages/Profile'
import AddForm from './pages/Forms';
import UndefinedPage from './pages/404'

export const routes = [
    {path: '/', component: PatinaPage},
    {path: '/books', component: BooksPage},
    {path: '/book', component: BookPage},
    {path: '/tops', component: TopsPage},
    {path: '/top', component: TopPage},
    {path: '/reviews', component: ReviewsPage},
    {path: '/review', component: ReviewPage},
    {path: '/events', component: EventsPage},
    {path: '/news', component: NewsPage},
    {path: '/new', component: NewPage},
    {path: '/search', component: SearchPage},
    {path: '/registration', component: RegistrationPage},
    {path: '/profile/:page', component: Profile},
    {path: '/form/:type', component: AddForm},
    {path: '*', component: UndefinedPage}
];