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
		
	}

	componentDidUpdate(prevProps, prevState) {
        if (prevProps.books) {
            const arrOfBooks = data.books;
            const randomBooks = arrOfBooks.filter(book => {
            	let index = Math.floor(Math.random() * arrOfBooks.length);
            	return randomBooks.length <= 14 && arrOfBooks[index]
            });
	        console.log(randomBooks);
        }
    }

    render() {
        return (
            <div className="rightMenu">
                <div className="rightMenu__content">
                    <div className="rightMenu__title">
                        содержание
                    </div>
                    {data && data.items.map((item, key) => (
                        <Link to={item.link} className="rightMenu__book" key={item.id}>
                            <span className="rightMenu__book-title">{item.title}</span>
                            <span className="rightMenu__book-num">{key + 1}</span>
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}


export default RightMenu;