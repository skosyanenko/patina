import React from 'react'
import './index.sass'
import Icons from '../Icons'
import {Link} from 'react-router-dom'
import Socials from '../Socials'

const NewText = () => {
    return(
        <div className="newText">
            <h1 className="newText__title">Книга «Ветра зимы» выйдет в 2020 году</h1>
            <div className="newText__left">
                <div className="newText__about">
                    <p>Поклонники Вселенной Мартина остались недовольны финалом сериала «Игра Престолов», Петиция о пересъемке 8 сезона набирает обороты, но все же фанам придется дождаться выхода книг Джорджа Мартина, чтобы узнать альтернативный конец истории.</p>
                    <p>«Ветра зимы» одна их самых ожидаемых книг последних лет. Джордж Мартин все время откладывал выход книги, но на этот раз писатель обещал презентовать книгу в середине 2020 года. Именно в это время в Новой Зеландии пройдет Всемирный конвент научной фантастики.</p>
                    <p>Отметим, что на днях авиакомпания Air New Zealand выложила шуточный ролик, где компания. Именно в это время в Новой Зеландии пройдет Всемирный конвент научной фантастики. предложила Мартину бесплатное путешествие в Новую Зеланию, где он сможет отдохнуть от популярности и дописать.</p>
                    <p>После этого ролика Джордж Мартин в своем блоге рассказал о предполагаемой дате выхода книги и отметил: «Если у меня не будет на руках «Ветров зимы», то у вас есть мое письменное разрешение заточить меня на Уайт-айленд с видом на это озеро серной кислоты пока я не допишу книгу».</p>
                    <p>Фанатам остается ждать долгожданного продолжения еще год. К сожалению, узнать финал всей саги удастся еще не скоро, так как дата выхода последней части «Грезы о весне», как и стадия написания книги, неизвестна.</p>
                </div>
                <div className="newText__date">02.07.2019</div>
                <div className="newText__nav">
                    <Icons like={16} views={16}/>
                    <Link to={'/news'} className="button-green">Назад</Link>
                    <Socials/>
                </div>
            </div>
        </div>
    )
};

export default NewText;
