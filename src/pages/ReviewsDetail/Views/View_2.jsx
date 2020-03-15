import React, {Component} from 'react';
import UserInfo from '../UserInfo';
import Writer from '../Writer';
import CommentBlock from 'components/CommentBlock';
import './index.sass';

class View_2 extends Component {
    formatType = (type, value) => {
        switch (type) {
            case 'Paragraph':
            case 'List':
                return <div className="review-wrap__paragraph">{value}</div>;
            case 'Marker':
                return <mark>{value}</mark>;
            case 'Quote':
                return <p className="review-wrap__quote">{value}</p>;
            case 'Image':
                return <img src="images/topImage/1.jpg" alt="" className="review-wrap__image"/>;
            case 'Header':
                return <h3 className="review-wrap__heading">{value}</h3>;
            case 'Delimiter':
                return <p className="review-wrap__delimiter">* * *</p>;
        }
    };

    render() {
        const {review, textLength} = this.props;

        return (
            <>
                <div className="container-review">
                    <Writer/>

                    <div className="container-review__text">
                        <h1 className="container-review__text-title">{review.title}</h1>
                        <span className="container-review__text-subtitle">{review.title}</span>
                    </div>
                </div>

                <div className="review-wrap">
                    {review.description && Object.keys(review.description).map(item => (
                        this.formatType(item, review.description[item])
                    ))}
                </div>
                <UserInfo textLength={textLength}
                          likes={review.likes}
                          date={review.date}
                />
                <CommentBlock reviewId={review.id}/>
            </>
        );
    }
}

export default View_2;