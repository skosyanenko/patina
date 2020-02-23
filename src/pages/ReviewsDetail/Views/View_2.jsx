import React, {Component} from 'react';
import UserInfo from '../UserInfo';
import Writer from '../Writer';
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
        const {title, subtitle, description, textLength, date, likes} = this.props;

        return (
            <>
                <div className="container-review">
                    <Writer/>

                    <div className="container-review__text">
                        <h1 className="container-review__text-title">{title}</h1>
                        <span className="container-review__text-subtitle">{subtitle}</span>
                    </div>
                </div>

                <div className="review-wrap">
                    {description && Object.keys(description).map(item => (
                        this.formatType(item, description[item])
                    ))}
                </div>
                <UserInfo textLength={textLength}/>
            </>
        );
    }
}

export default View_2;