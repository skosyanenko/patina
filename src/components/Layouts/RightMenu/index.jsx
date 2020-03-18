import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './index.sass';
import axios from 'axios';

class RightMenu extends Component {
    state = {
        isLoad: true,
        randomBooks: []
    };

	componentDidMount() {
	    this.fetchBooks();
	};

    fetchBooks = () => {
        axios.get('/api/v1/booksRightMenu')
            .then(res => {
                res.data &&
                this.setState({
                    randomBooks: res.data
                })
            })
            .catch(err => {
                console.log('Ошибка получения элементов из бд' + err)
            });
    };

    render() {
        const {randomBooks} = this.state;
        return (
            <div className="content">
                <div className="content__wrapper">
                    <div className="content__title">
                        содержание
                    </div>
                    {randomBooks && randomBooks.map((item, key) => (
                        <Link to={`/books/${item.id}`} className="content__item" key={key}>
                            <span className="content__item-title">{item.title}</span>
                            <span className="content__item-num">{key + 1}</span>
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}

export default RightMenu;