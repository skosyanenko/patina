import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './index.sass';
import data from 'startData/books';

class RightMenu extends Component {
    state = {
        isLoad: true,
        books: [],
        randomBooks: []
    };

	componentDidMount() {
		const arrOfBooks = data.books;
		const randomBooks = [];
		for (let i = 0; i <= 9; i++) {
			let index = Math.floor(Math.random() * arrOfBooks.length);
			randomBooks.push(arrOfBooks[index]);
		}
		this.setState({
			randomBooks: [...new Set(randomBooks)]
		})
	};

    render() {
        return (
            <div className="content">
                <div className="content__wrapper">
                    <div className="content__title">
                        содержание
                    </div>
                    {this.state.randomBooks && this.state.randomBooks.map((item, key) => (
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