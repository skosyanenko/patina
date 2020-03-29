import React, {Component} from 'react';
import TimeToRead from 'components/TimeToRead';
import PropTypes from 'prop-types';
import './index.sass';

class Author extends Component {

    letterSubstr = (name, surname) => (name.substr(0, 1) + surname.substr(0, 1));

    render() {
        const {isTimeToRead, textLength, date, avatar, firstName, lastName} = this.props;

        return (
            <div className="author">
                <div className="author__avatar">
                    {avatar
                        ?
                        <img src={avatar} alt="" className="author__avatar-img"/>
                        :
                        <div className="author__avatar-name">{this.letterSubstr('Mark', 'Jacobs')}</div>
                    }
                </div>
                <div className="author__inform">
                    <span className="author__inform-name">Тетя Мотя</span>
                    <span className="author__inform-date">{date}</span>
                    {isTimeToRead &&
                        <TimeToRead textLength={textLength}/>
                    }
                </div>
            </div>
        );
    }
}

Author.propTypes = {
    isTimeToRead: PropTypes.bool.isRequired,
    date:         PropTypes.string.isRequired
};

export default Author;