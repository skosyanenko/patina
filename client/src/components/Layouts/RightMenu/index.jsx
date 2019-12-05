import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './index.sass';
import data from 'startData/rightMenu';


class RightMenu extends Component {
    state = {
        isLoad: true,
        books: [],
        randomBooks: []
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.books) {
            const arrOfBooks = this.state.books;
            const randomBooks = arrOfBooks.filter(book => {
                if (randomBooks.length >= 10) {
                    let index = Math.floor(Math.random() * arrOfBooks.length);
                    arrOfBooks.slice(index, 1);
                    randomBooks.push(book);
                }
                console.log(randomBooks);
            })
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