import React, {Component} from 'react';
import TimeToRead from 'components/TimeToRead';
import PropTypes from 'prop-types';
import './index.sass';

class Author extends Component {

    render() {
        const {isTimeToRead, textLength} = this.props;

        return (
            <div className="author">
                <div className="author__avatar">
                    <img src="" alt="" className="author__avatar-img"/>
                    <div className="author__avatar-name">ТМ</div>
                </div>
                <div className="author__inform">
                    <span className="author__inform-name">Тетя Мотя</span>
                    <span className="author__inform-date">01.11.19</span>
                    {isTimeToRead &&
                        <TimeToRead textLength={textLength}/>
                    }
                </div>
            </div>
        );
    }
}

Author.propTypes = {
    isTimeToRead: PropTypes.bool.isRequired
};

export default Author;