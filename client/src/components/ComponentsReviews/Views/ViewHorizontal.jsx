import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { counterLetters, returnDatePublish } from 'config/config';
import CommentBlock from 'components/CommentBlock';
import UserInfo from '../Components/UserInfo';
import Writer from '../Components/Writer';

class ViewHorizontal extends Component {
    render () {
        const { book, title, likes, created_at, description, id, authors, toggleModal } = this.props;

        return (
            <>
                <div className="review-wrapper">
                    <div className="review-wrapper__wrap">
                        <Writer quote={book && book.quote}
                            authors={authors}
                            image={authors}
                        />
                        <div className="review-wrapper__text">
                            <h1 className="review-wrapper__text-title">{book && book.title}</h1>
                            <span className="review-wrapper__text-subtitle">{title}</span>
                        </div>
                    </div>
                    <div className="review-wrapper__page"
                        itemType="http://schema.org/Review"
                        itemProp="review"
                        itemScope
                    >
                        <div className="review-wrapper__page-triangle"/>
                        <h1 className="review-wrapper__page-title" itemProp="itemReviewed">{book.title}</h1>
                        <div className="review-wrapper__page-subtitle">
                            <span itemProp="headline name">{title}</span>
                        </div>
                        <div className="review-wrapper__page-text">
                            <div className="review-wrapper__user">
                                {description &&
                                    <UserInfo
                                        textLength={counterLetters(description)}
                                        likes={likes}
                                        date={returnDatePublish(created_at)}
                                        toggleModal={toggleModal}
                                    />
                                }
                            </div>
                            <div className="review-wrapper__description" itemProp="reviewBody">
                                <ReactMarkdown children={description}/>
                            </div>
                            <span className="review-wrapper__number">1</span>
                        </div>
                    </div>
                </div>
                <CommentBlock reviewId={id}/>
            </>
        )
    }
};

export default ViewHorizontal;
