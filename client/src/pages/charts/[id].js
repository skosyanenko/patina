import React, { Component } from 'react';
import Link from 'next/link';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { returnAuthor } from 'config/config';
import Socials from 'components/SocialsGroup';
import CommentBlock from 'components/CommentBlock';
import MyHead from 'components/MyHead';

class ChartsDetail extends Component {
    state = {
        currentChart: []
    };

    componentDidMount() {
        const { serverData } = this.props;
        this.setState({ currentChart: serverData })
    };

    render() {
        const { currentChart: {title, description, books, id, comments} } = this.state;
        const { toggleModal } = this.props;

        return(
            <>
                <MyHead
                    title={title}
                    description={description}
                    link={`/charts/${id}`}
                    robots={'all'}
                />
                <div itemType="http://schema.org/ItemList http://schema.org/CreativeWork" itemScope>
                <div className="depiction" >
                    <div className="depiction__wrapper">
                        <Link href={'/charts'} >
                            <a className="backwards"/>
                        </Link>
                        <h1 className="depiction__wrapper-title" itemProp="name">{title}</h1>
                    </div>
                    <ReactMarkdown
                        source={description}
                        className="depiction__description"
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
                        <Socials toggleModal={toggleModal}/>
                    </div>
                </div>
                <CommentBlock
                    idContent={id}
                    typeContent={'charts'}
                    comments={comments}
                />
            </div>
            </>
        );
    }
}

export async function getServerSideProps({ params }) {
    const { API_URL } = process.env;

    const serverData = await axios.get(`${API_URL}/charts/${params.id}`)
        .then(res => res.data)
        .catch(err => console.log(err));

    return { props: { serverData } };
}

export default ChartsDetail;
