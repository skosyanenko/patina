import React, {useState, useEffect} from 'react';
import { withRouter } from 'next/router';
import { counterLetters } from 'config/config';
import paginationWrap from 'components/withPagination/paginationWrap';
import FiltersSearch from 'components/ComponentsSearch/FiltersSearch';
import ViewBook from 'components/ComponentsSearch/Views/ViewBook';
import ViewReview from 'components/ComponentsReviews/Components/ViewReview';
import NewsHorizontal from 'components/ComponentsNews/NewsHorizontal';
import ViewChart from 'components/ComponentsSearch/Views/ViewChart';
import InputSearch from 'components/InputSearch';
import Loader from 'components/Loader';
import MyHead from 'components/MyHead';

const {API_URL} = process.env;

const config = [
    { id: 'authors', route: '/books', param: 'authors.name_contains', class: ViewBook, title: 'Авторы' },
    { id: 'category', route: '/books', param: 'categories.title_contains', class: ViewBook, title: 'Категории' },
    { id: 'books', route: '/books', param: 'title_contains', class: ViewBook, title: 'Книги' },
    { id: 'reviews', route: '/reviews', param: 'title_contains', class: ViewReview, title: 'Рецензии' },
    { id: 'charts', route: '/charts', param: 'title_contains', class: ViewChart, title: 'Топы' },
    { id: 'articles', route: '/articles', param: 'title_contains', class: NewsHorizontal, title: 'Новости' }
];

const SearchList = ({router, items, fetchData, pagination, updateState, toggleModal}) => {

    const [query, setQuery] = useState({
        filter: '',
        title: ''
    });

    const [state, setState] = useState({
        loading: true,
        label: ''
    });

    const getItems = ({filter, title = ''}) => {
        const current = config.find(item => item.id === filter);

        const parameters = (current && title.length) ? `?${current.param}=${title}&_limit=500` : '?_limit=500';

        if (current) {
            fetchData(`${API_URL}${current.route}${parameters}`)
                .then(result => {
                    setQuery({ filter, title });
                    setState({
                        label: !result.length
                            ? 'К сожалению, по вашему запросу ничего не найдено.'
                            : `результаты поиска по параметру «${title || current.title}»`,
                        loading: false
                    });
                })
                .catch(err => console.log(err));
        }
    };

    const search = value => router.push(`/search?filter=${query.filter}&title=${value}`);

    const updateFilter = filter => router.push(`/search?filter=${filter}${query.title && `&title=${query.title}` || ''}`);

    useEffect(() => {
        getItems(router.query);
    }, [router.query.filter, router.query.title]);

    useEffect(() => {
        updateState({ perPage: 6, valuesDropdown: [6, 12, 18]});
    }, []);

    return (
        <>
            <MyHead
                title={'Поиск - Patina'}
                description={'Найдите интересующую Вас книгу, рецензию, новость или подборку'}
                link={'/search'}
                robots={'all'}
            />
            <div className="search">
                <FiltersSearch
                    updateFilter={updateFilter}
                    filter={query.filter}
                />

                <InputSearch
                    search={search}
                    classNamePrefix="quest--searchResults"
                />

                {state.loading && <Loader/> ||
                    <>

                        <div className="search__title">
                            {state.label}
                        </div>

                        <div className={(query.filter === 'charts' || query.filter === 'articles') && 'search__grid' || 'search__result'}>
                            {items && items.map((item, key) => {
                                const Component = config.find(item => item.id === query.filter).class;
                                const datePublish = new Date(item.created_at).toLocaleDateString();
                                const text = (query.filter ==='articles' || query.filter ==='reviews') ? counterLetters(item.description) : ''

                                return (
                                    <Component
                                        key={key}
                                        item={item}
                                        textLength={text}
                                        date={datePublish}
                                        toggleModal={toggleModal}
                                    />
                                )
                            })}
                        </div>

                        {items.length ? pagination : ''}

                    </>
                }
            </div>
        </>
    )
}

export default withRouter(paginationWrap(SearchList));
