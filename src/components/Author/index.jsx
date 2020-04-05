import React, { Component } from 'react';
import TimeToRead from 'components/TimeToRead';
import { returnNameLetters } from 'config/config';
import './index.sass';

class Author extends Component {

    render() {
        const {isTimeToRead, textLength, date, avatar, name, surname } = this.props;

        return (
            <div className="author">
                <div className="author__avatar">
                    {avatar
                        ?
                        <img src={avatar} alt="" className="author__avatar-img"/>
                        :
                        <div className="author__avatar-name">{returnNameLetters('Mark', 'Jacobs')}</div>
                    }
                </div>
                <div className="author__inform">
                    <span className="author__inform-name" itemProp="author creator">Тетя Мотя</span>
                    <span className="author__inform-date" itemProp="datePublished commentTime">{date}</span>
                    {isTimeToRead &&
                        <TimeToRead textLength={textLength}/>
                    }
                </div>
            </div>
        );
    }
}

export default Author;