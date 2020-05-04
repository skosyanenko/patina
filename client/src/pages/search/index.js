import React, {useState, useEffect} from 'react';
import { withRouter } from 'next/router';
import paginationWrap from 'components/withPagination/paginationWrap';
import FiltersSearch from 'components/ComponentsSearch/FiltersSearch';
import ViewBook from 'components/ComponentsSearch/Views/ViewBook';
import ViewReview from 'components/ComponentsReviews/Components/ViewReview';
import NewsHorizontal from 'components/ComponentsNews/NewsHorizontal';
import ViewChart from 'components/ComponentsSearch/Views/ViewChart';
import InputSearch from 'components/InputSearch';
import Loader from 'components/Loader';
import { counterLetters } from 'config/config';

const {API_URL} = process.env;

const config = [
    { id: 'authors', route: '/books', param: 'authors.name_contains', class: ViewBook },
    { id: 'category', route: '/books', param: 'categories.title_contains', class: ViewBook },
    { id: 'books', route: '/books', param: 'title_contains', class: ViewBook },
    { id: 'reviews', route: '/reviews', param: 'title_contains', class: ViewReview },
    { id: 'charts', route: '/charts', param: 'title_contains', class: ViewChart },
    { id: 'articles', route: '/articles', param: 'title_contains', class: NewsHorizontal }
];

const SearchList = ({router, items, fetchData, pagination, updateState}) => {

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
                            ? 'по вашему запросу ничего не найдено'
                            : `результаты поиска по параметру «${title || filter}»`,
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
        console.log('component did mount');
    }, []);

    return (
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

                    <div className={`search__result ${query.filter === 'reviews' && 'reviews' || ''}`}>
                        {items && items.map((item, key) => {
                            const Component = config.find(item => item.id === query.filter).class;
                            const datePublish = new Date(item.created_at).toLocaleDateString();
                            //const text = filters ==='articles' ? counterLetters(item.description) : ''

                            return (
                                <Component
                                    key={key}
                                    item={item}
                                    //textLength={text}
                                    date={datePublish}
                                />
                            )
                        })}
                    </div>

                    {items.length ? pagination : ''}

                </>
            }
        </div>
    )
}

export default withRouter(paginationWrap(SearchList));
