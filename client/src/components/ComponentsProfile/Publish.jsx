import React, { Component } from 'react';
import Link from 'next/link';
import { counterLetters, returnDatePublish } from 'config/config';
import Author from 'components/Author';
import Icons from 'components/Icons';
import axios from 'axios';

class Publish extends Component {
    state = {
        currBook: []
    };

    componentDidMount() {
        this.getItems();
    };

    getItems = () => {
        const { API_URL } = process.env;
        const { item } = this.props;

        axios.get(`${API_URL}/books/${item.book}`)
            .then(res => {
                res.data &&
                this.setState({
                    currBook: res.data
                })
            })
            .catch(err => {
                console.log('Ошибка получения элементов из бд' + err)
            });
    };

    render () {
        const { item, user, toggleModal } = this.props;
        const { currBook: {bookImage, title} } = this.state;

        return (
            <div className="published">
                <Author
                    isTimeToRead={true}
                    textLength={counterLetters(item.description)}
                    date={returnDatePublish(item.created_at)}
                    user={user}
                />
                <Link as={`/reviews/${item.id}`} href={`/reviews/${item.id}`}>
                    <a className="published__title">
                        {item.title}
                    </a>
                </Link>
                <Link as={`/reviews/${item.id}`} href={`/reviews/${item.id}`}>
                    <a>
                        {bookImage && <img src={`${bookImage.url}`} alt="" className="published__img"/>}
                    </a>
                </Link>
                <div className="published__wrapper">
                    <div className="published__text">
                        <div className="published__text-type">Рецензия</div>
                        <div className="published__text-name">{`«${title}» `}</div>
                    </div>
                    <Icons
                        idContent={item.id}
                        typeContent={'reviews'}
                        likes={item.likes}
                        toggleModal={toggleModal}
                    />
                </div>
            </div>
        )
    }
}

export default Publish;