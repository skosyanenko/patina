import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './index.sass';
import axios from 'axios';

class RightMenu extends Component {
    state = {
        isLoad: true,
        books: [],
        randomBooks: []
    };

	componentDidMount() {
	    this.fetchBooks();
	};

	random = () => {
        const randomBooks = [];
        for (let i = 0; i <= 9; i++) {
            let index = Math.floor(Math.random() * this.state.books.length);
            randomBooks.push(this.state.books[index]);
        }
        this.setState({
            randomBooks: [...new Set(randomBooks)]
        });
    };

    fetchBooks = () => {
        axios.get('/api/v1/books')
            .then(res => {
                res.data &&
                this.setState({
                    books: res.data
                }, () => {
                    this.random();
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
                        <Link to="/book" className="content__item" key={key}>
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