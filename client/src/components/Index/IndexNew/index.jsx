import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Slider from 'react-slick';
import './index.sass';
import Icons from "../../Icons";
import {sliderSettings} from "config/config";

class IndexNew extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    render() {
        const settings = sliderSettings;
        settings.dotsClass = sliderSettings.dotsClass + '__numb';

        return (
            <Slider ref={c => (this.slider = c)} {...settings}>
                <div className="indexNew index-wrapper" key={1}>
                    <div className="indexNew__img">
                        <img src="/images/news/1.png" alt=""/>
                    </div>
                    <div className="indexNew__about">
                        <div className="indexNew__title">Книга «Ветра зимы» выйдет в 2020 году</div>
                        <div className="indexNew__text">
                            <p>Поклонники Вселенной Мартина остались недовольны финалом сериала «Игра Престолов», Петиция о пересъемке 8 сезона набирает обороты, но все же фанам придется дождаться выхода книг Джорджа Мартина, чтобы узнать альтернативный конец истории.</p>
                            <p>«Ветра зимы» одна их самых ожидаемых книг последних лет. Джордж Мартин все время откладывал выход книги, но на этот раз писатель обещал презентовать книгу в середине 2020 года. Именно в это время в Новой Зеландии пройдет Всемирный конвент научной фантастики.</p>
                        </div>
                        <div className="indexNew__nav">
                            <div className="indexNew__arrows">
                                <div className="indexNew__arrow" onClick={this.previous}/>
                                <div className="indexNew__arrow" onClick={this.next}/>
                            </div>
                            <Icons like={16} views={16} clock={16}/>
                            <Link to={'/top'} className="button-black">Далее</Link>
                        </div>
                    </div>
                </div>
                <div className="indexNew index-wrapper" key={1}>
                    <div className="indexNew__img">
                        <img src="/images/news/1.png" alt=""/>
                    </div>
                    <div className="indexNew__about">
                        <div className="indexNew__title">Книга «Ветра зимы» выйдет в 2020 году</div>
                        <div className="indexNew__text">
                            <p>Поклонники Вселенной Мартина остались недовольны финалом сериала «Игра Престолов», Петиция о пересъемке 8 сезона набирает обороты, но все же фанам придется дождаться выхода книг Джорджа Мартина, чтобы узнать альтернативный конец истории.</p>
                            <p>«Ветра зимы» одна их самых ожидаемых книг последних лет. Джордж Мартин все время откладывал выход книги, но на этот раз писатель обещал презентовать книгу в середине 2020 года. Именно в это время в Новой Зеландии пройдет Всемирный конвент научной фантастики.</p>
                        </div>
                        <div className="indexNew__nav">
                            <div className="indexNew__arrows">
                                <div className="indexNew__arrow" onClick={this.previous}/>
                                <div className="indexNew__arrow" onClick={this.next}/>
                            </div>
                            <Icons like={16} views={16} clock={16}/>
                            <Link to={'/top'} className="button-black">Далее</Link>
                        </div>
                    </div>
                </div>
                <div className="indexNew index-wrapper" key={1}>
                    <div className="indexNew__img">
                        <img src="/images/news/1.png" alt=""/>
                    </div>
                    <div className="indexNew__about">
                        <div className="indexNew__title">Книга «Ветра зимы» выйдет в 2020 году</div>
                        <div className="indexNew__text">
                            <p>Поклонники Вселенной Мартина остались недовольны финалом сериала «Игра Престолов», Петиция о пересъемке 8 сезона набирает обороты, но все же фанам придется дождаться выхода книг Джорджа Мартина, чтобы узнать альтернативный конец истории.</p>
                            <p>«Ветра зимы» одна их самых ожидаемых книг последних лет. Джордж Мартин все время откладывал выход книги, но на этот раз писатель обещал презентовать книгу в середине 2020 года. Именно в это время в Новой Зеландии пройдет Всемирный конвент научной фантастики.</p>
                        </div>
                        <div className="indexNew__nav">
                            <div className="indexNew__arrows">
                                <div className="indexNew__arrow" onClick={this.previous}/>
                                <div className="indexNew__arrow" onClick={this.next}/>
                            </div>
                            <Icons like={16} views={16} clock={16}/>
                            <Link to={'/top'} className="button-black">Далее</Link>
                        </div>
                    </div>
                </div>
            </Slider>
        )
    }
}

IndexNew.propTypes = {};

export default IndexNew;