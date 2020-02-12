import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.sass';

class Author extends Component {
    render() {
        const {isTimeToRead} = this.props;
        return (
            <div className="author">
                <div className="author__avatar">
                    <img src="" alt="" className="author__avatar-img"/>
                    <div className="author__avatar-name">ТМ</div>
                </div>
                <div className="author__inform">
                    <span className="author__inform-name">Тетя Мотя</span>
                    <span className="author__inform-date">01.11.19</span>
                    {isTimeToRead && <span className="author__inform-time">12 мин. читать</span>}
                </div>
            </div>
        );
    }
}

Author.propTypes = {
    isTimeToRead: PropTypes.bool.isRequired
};

export default Author;