import React, { Component } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { returnAuthor } from 'config/config';
import Socials from 'components/SocialsGroup';
import CommentBlock from 'components/CommentBlock';

class ChartsDetail extends Component {
    state = {
        currentTop: []
    };

    componentDidMount() {
        this.fetchCurrentTop();
    };

    fetchCurrentTop = async () => {
        const { id } = this.props.match.params;

        return await axios.get(`/api/v1/charts/${id}`)
            .then(res => {
                if (res.data) {
                    this.setState({currentTop: res.data})
                }
            })
            .catch(err => {
                console.log('Ошибка получения элементов из бд' + err)
            });
    };

    render() {
        const { currentTop: {title, description, books, id} } = this.state;

        return(
            <div itemType="http://schema.org/ItemList http://schema.org/CreativeWork" itemScope>
                <div className="depiction" >
                    <div className="depiction__wrapper">
                        <Link href={'/charts'} >
                            <a className="backwards"/>
                        </Link>
                        <h1 className="depiction__wrapper-title" itemProp="name">{title}</h1>
                    </div>
                    <div className="depiction__description"
                         dangerouslySetInnerHTML={{__html: `${description}`}}
                    />
                </div>
                <div className="container">
                    <div className="top-grid">
                        { books && books.map((item, key) => (
                            <div className="block"
                                 itemProp="itemListElement"
                                 itemType="https://schema.org/Book"
                                 itemScope
                            >
                                <div className="block__wrapper" key={key}>
                                    <div className="block__title" itemProp="name">
                                        <Link href={'/books/[id]'} as={`/books/${item.id}`}>
                                            <a itemProp="url" content={`patina.ru/books/${item.id}`}>
                                                {item.title}
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="block__number">
                                        <Link href={'/books/[id]'} as={`/books/${item.id}`}>
                                            <a itemProp="position" content={key + 1}>
                                                {key + 1}
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <span className="block__author" itemProp="author">{returnAuthor(item.authors)}</span>
                                <span className="block__description" itemProp="description">
                                    {item.shortDescription}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="icons-wrap">
                    <div className="icons-wrap__socials">
                        <Socials/>
                    </div>
                </div>
                <CommentBlock topId={id}/>
            </div>
        );
    }
}

export default ChartsDetail;
