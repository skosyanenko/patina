import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import Store from 'services/Store';

class RightMenu extends Component {
    state = {
        randomBooks: []
    };

	componentDidMount() {
        this.getItems();
	};

	getItems = () => {
	    const { books } = Store;

	    const randomBooks = books.data.reduce(acc => {
	        if (acc.length <= 9) {
                const randomIndex = Math.floor(Math.random() * books.data.length);
                if (!acc.includes(books.data[randomIndex])) {
                    acc.push(books.data[randomIndex]);
                }
            }
	        return acc;
        }, [])

        this.setState({ randomBooks });
    };

    render() {
        const { randomBooks } = this.state;
        return (
            <div className="content">
                <div className="content__wrapper">
                    <div className="content__title">
                        содержание
                    </div>
                    { randomBooks && randomBooks.map((item, key) => (
                        <Fragment key={key}>
                            <Link href={'/books/[id]'} as={`/books/${item.id}`}>
                                <a className="content__item">
                                    <span className="content__item-title">{item.title}</span>
                                    <span className="content__item-num">{key + 1}</span>
                                </a>
                            </Link>
                        </Fragment>
                    ))}
                </div>
            </div>
        );
    }
}

export default RightMenu;