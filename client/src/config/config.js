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

export const filtersParams = [
    { title: 'книгам', keys: 'books' },
    { title: 'авторам', keys: 'authors' },
    { title: 'категориям', keys: 'category' },
    { title: 'топам', keys: 'charts' },
    { title: 'критике', keys: 'reviews' },
    { title: 'новостям', keys: 'articles' }
];

export const profileLinks = [
    // { title: 'Подписки', type: 'follows', img: 'group' },
    { title: 'Редактировать', type: 'edit', img: 'statistic' }
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

export const returnImage = (authors = []) => authors.map(({picture}) => picture.url);

export const returnNameLetters = (name) => (name.substr(0, 1));

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