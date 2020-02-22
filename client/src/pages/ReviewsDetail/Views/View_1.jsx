import React, {Component} from 'react';
import UserInfo from '../UserInfo';
import Writer from '../Writer';
import './index.sass';

class View_1 extends Component {
    render() {
        const {title, subtitle, description, textLength, date, likes} = this.props;

        return (
            <div className="review-wrapper">
                <div className="review-wrapper__wrap">
                    <Writer/>

                    <div className="review-wrapper__text">
                        <h1 className="review-wrapper__text-title">{title}</h1>
                        <span className="review-wrapper__text-subtitle">{subtitle}</span>
                    </div>
                </div>
                <div className="review-wrapper__page">
                    <div className="review-wrapper__page-triangle"/>
                    <h1 className="review-wrapper__page-title">{title}</h1>
                    <div className="review-wrapper__page-subtitle">
                        <span>{subtitle}</span>
                    </div>
                    <div className="review-wrapper__page-text">
                        <div className="review-wrapper__user">
                            <UserInfo textLength={textLength}/>
                        </div>
                        <div className="review-wrapper__description">
                            {description && Object.keys(description).map(item => (
                                <p className={`review-wrap__${item}`} key={item}>
                                    {description[item]}
                                </p>
                            ))}
                        </div>
                    <span className="review-wrapper__number">1</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default View_1;
