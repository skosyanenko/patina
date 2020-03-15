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
        delay: function (el, index) {
            return index * 50;
        },
        easing: 'easeOutSine',
        opacity: 1,
        rotateY: [-90, 0]
    },
    out: {
        duration: 200,
        delay: function (el, index) {
            return index * 50;
        },
        easing: 'easeOutSine',
        opacity: 0,
        rotateY: 45
    }
};

export const formRoutes = {
    authors: {title: 'Добавить писателя', path: '/control/authors', icon: 'fun'},
    categories: {title: 'Добавить экранизацию', path: '/control/films', icon: 'films'},
    events: {title: 'Добавить категорию', path: '/control/categories', icon: 'author'},
    books: {title: 'Добавить книгу', path: '/control/books', icon: 'books'},
    films: {title: 'Добавить топ', path: '/form/top', icon: 'wishlist'},
    top: {title: 'Добавить эвент', path: '/control/events', icon: 'author'},
    news:  {title: 'Добавить новость', path: '/control/news', icon: 'quote'},
    review: {title: 'Добавить рецензию'},
    registration: {title: 'Регистрация'}
};

export const letters = [
    {id: 'letter-1', letter: 'А'},
    {id: 'letter-2', letter: 'Б'},
    {id: 'letter-3', letter: 'В'},
    {id: 'letter-4', letter: 'Г'},
    {id: 'letter-5', letter: 'Д'},
    {id: 'letter-6', letter: 'Е'},
    {id: 'letter-7', letter: 'Ж'},
    {id: 'letter-8', letter: 'З'},
    {id: 'letter-9', letter: 'И'},
    {id: 'letter-10', letter: 'К'},
    {id: 'letter-11', letter: 'Л'},
    {id: 'letter-12', letter: 'М'},
    {id: 'letter-13', letter: 'Н'},
    {id: 'letter-14', letter: 'О'},
    {id: 'letter-15', letter: 'П'},
    {id: 'letter-16', letter: 'Р'},
    {id: 'letter-17', letter: 'С'},
    {id: 'letter-18', letter: 'Т'},
    {id: 'letter-19', letter: 'У'},
    {id: 'letter-20', letter: 'Ф'},
    {id: 'letter-21', letter: 'Х'},
    {id: 'letter-22', letter: 'Ц'},
    {id: 'letter-23', letter: 'Ч'},
    {id: 'letter-24', letter: 'Ш'},
    {id: 'letter-25', letter: 'Щ'},
    {id: 'letter-26', letter: 'Э'},
    {id: 'letter-27', letter: 'Ю'},
    {id: 'letter-28', letter: 'Я'}
];

export const sortParams = [
    {title: 'названию', key: 'title'},
    {title: 'автору', key: 'author'},
    {title: 'рейтингу', key: 'rating'},
]