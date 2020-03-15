import React from "react";

export const alphabet = [
  'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж',
'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р',
'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'э',
'ю', 'я', '0', '1', '2', '3', '4', '5', '6', '7',
'8', '9'
];

export const MONTHS = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май',
    'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
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

export const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'indexNew',
    customPaging: i => (
        <div className="indexNew__numb-dot">
            {(i + 1 <= 9) ? `0${i + 1}` : i + 1}
        </div>
    )
};

export const effectForImage = {
    movement: {
        imgWrapper: {
            translation: {x: 0, y: 0, z: 0},
            rotation: {x: -15, y: 15, z: 0},
            reverseAnimation: {
                duration: 1200,
                easing: 'easeOutElastic',
                elasticity: 600
            }
        },
        lines: {
            translation: {x: 10, y: 10, z: [0, 10]},
            reverseAnimation: {
                duration: 1000,
                easing: 'easeOutExpo',
                elasticity: 600
            }
        },
        shine: {
            translation: {x: 50, y: 50, z: 0},
            reverseAnimation: {
                duration: 1200,
                easing: 'easeOutElastic',
                elasticity: 600
            }
        }
    }
};

export const formRoutes = {
    authors: {title: 'Добавить писателя'},
    categories: {title: 'Добавить категорию'},
    events: {title: 'Добавить эвент'},
    books: {title: 'Добавить книгу'},
    films: {title: 'Добавить экранизацию'},
    top: {title: 'Создать подборку книг'},
    review: {title: 'Добавить рецензию'},
    news: {title: 'Добавить новость'}
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

