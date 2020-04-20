import React from 'react';

export const MONTHS = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
];

export const effectForTitle = {
    perspective: 1000,
    origin: '50% 100%',
    in: {
        duration: 800,
        delay: function(el, index) {
            return index * 50;
        },
        easing: 'easeOutSine',
        opacity: 1,
        rotateY: [-90, 0]
    },
    out: {
        duration: 200,
        delay: function(el, index) {
            return index * 50;
        },
        easing: 'easeOutSine',
        opacity: 0,
        rotateY: 45
    }
};

export const formRoutes = {
    charts: { title: 'Добавить топ', path: '/form/charts', icon: 'wishlist' },
    reviews: { title: 'Добавить рецензию', path: '/form/reviews' }
};

export const letters = [
    { id: 'letter-1', letter: 'А' },
    { id: 'letter-2', letter: 'Б' },
    { id: 'letter-3', letter: 'В' },
    { id: 'letter-4', letter: 'Г' },
    { id: 'letter-5', letter: 'Д' },
    { id: 'letter-6', letter: 'Е' },
    { id: 'letter-7', letter: 'Ж' },
    { id: 'letter-8', letter: 'З' },
    { id: 'letter-9', letter: 'И' },
    { id: 'letter-10', letter: 'К' },
    { id: 'letter-11', letter: 'Л' },
    { id: 'letter-12', letter: 'М' },
    { id: 'letter-13', letter: 'Н' },
    { id: 'letter-14', letter: 'О' },
    { id: 'letter-15', letter: 'П' },
    { id: 'letter-16', letter: 'Р' },
    { id: 'letter-17', letter: 'С' },
    { id: 'letter-18', letter: 'Т' },
    { id: 'letter-19', letter: 'У' },
    { id: 'letter-20', letter: 'Ф' },
    { id: 'letter-21', letter: 'Х' },
    { id: 'letter-22', letter: 'Ц' },
    { id: 'letter-23', letter: 'Ч' },
    { id: 'letter-24', letter: 'Ш' },
    { id: 'letter-25', letter: 'Щ' },
    { id: 'letter-26', letter: 'Э' },
    { id: 'letter-27', letter: 'Ю' },
    { id: 'letter-28', letter: 'Я' }
];

export const sortParams = [
    { title: 'названию', key: 'title' },
    { title: 'автору', key: 'authors' },
    { title: 'рейтингу', key: 'rating' },
];

export const profileLinks = [
    { title: 'Профиль', path: 'home', img: 'home' },
    { title: 'Подписки', path: 'following', img: 'group' },
    { title: 'Статистика', path: 'statistic', img: 'statistic' }
];

export const counterLetters = description => {
    const objValues = Object.keys(description).map(x => description[x]);
    const textLength = Array.from(objValues)
        .reduce((acc, item) => (acc + item.replace(/\s+/g, '').length), 0);
    return textLength;
};

export const counterReview = description => {
    const objValues = JSON.parse(description).map(x => x.data.text).join();
    const textLength = Array.from(objValues)
        .reduce((acc, item) => (acc + item.replace(/\s+/g, '').length), 0);
    return textLength;
};

export const returnDatePublish = date => {
    return new Date(date).toLocaleDateString();
};

export const returnAuthor = (authors = []) => authors.map(({name}) => name).join(', ');

export const returnDate = (authors = []) => {
    return authors.reduce((acc, {birth, death}) => {
        const birthDate = birth.slice(0, -6);
        const deathDate = death ? death.slice(0, -6) : 'н.в.';
        acc.push(`${birthDate} - ${deathDate}`);

        return acc;
    }, []).join(', ');
};

export const getDocHeight = () => {
    return Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
};

export const returnImage = (authors = []) => authors.map(({picture}) => picture);

export const returnNameLetters = (name, surname) => (name.substr(0, 1) + surname.substr(0, 1));

export const formatType = item => {

    switch (item.type) {
        case 'paragraph':
            return <p className={`review-wrap__paragraph`} dangerouslySetInnerHTML={{__html: `${item.data.text}`}}/>;
        case 'list':
            if (item.data.style === 'ordered'){
                return (
                    <ol>
                        {item.data.items.map((li, index) =>(
                            <li className={`review-wrap__${item.type}`}
                                key={index}
                                dangerouslySetInnerHTML={{__html: `${li}`}}
                            />
                        ))}
                    </ol>
                );
            } else {
                return (
                    <ul>
                        {item.data.items.map((li, index) =>(
                            <li className={`review-wrap__${item.type}`}
                                key={index}
                                dangerouslySetInnerHTML={{__html: `${li}`}}
                            />
                        ))}
                    </ul>
                );
            }
        case 'header':
            return <h2 className={`review-wrap__header`}>{item.data.text}</h2>;
        case 'warning':
            return (
                <>
                    {item.data.title && <div className="review-wrap__marked-title">{item.data.title}</div>}
                    <div className="review-wrap__marked">{item.data.message}</div>
                </>
            );
        case 'quote':
            return (
                <>
                    <p className="review-wrap__quote">{item.data.text}</p>
                    {item.data.caption && <span className="review-wrap__quote-caption">{item.data.caption}</span>}
                </>
            );
        case 'image':
            return <img src={item.data.url} alt="" className="review-wrap__image"/>;
        case 'delimiter':
            return <p className="review-wrap__delimiter">* * *</p>;
        default:
            return '';
    }
};

export const routes = [
    { path: '/', exact: true },
    { path: '/books', exact: true, group: 'nav' },
    { path: '/books/:id', exact: true, },
    { path: '/charts', exact: true, group: 'nav' },
    { path: '/charts/:id', exact: true, },
    { path: '/reviews', exact: true, group: 'nav' },
    { path: '/reviews/:id', exact: true, },
    { path: '/events', exact: true, group: 'nav' },
    { path: '/news', exact: true, group: 'nav' },
    { path: '/news/:id', exact: true },
    { path: '/search', exact: true },
    { path: '/search/:id', exact: true },
    { path: '/search?q=val', exact: true },
    { path: '/form/:type', exact: true },
    { path: '/profile/:page', exact: true },
    { path: '/control', exact: true },
    { path: '/control/:type', exact: true }
];