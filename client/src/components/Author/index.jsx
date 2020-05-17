import React, { Component } from 'react';
import TimeToRead from 'components/TimeToRead';
import { returnNameLetters } from 'config/config';

class Author extends Component {

    render() {
        const {isTimeToRead, textLength, date, user } = this.props;

        return (
            <div className="author">
                {user &&
                    <div className="author__avatar">
                        {user && user.avatar
                            ?
                            <img src={user.avatar} alt="" className="author__avatar-img"/>
                            :
                            <div className="author__avatar-name">{returnNameLetters(`${user.username}`)}</div>
                        }
                    </div>
                }
                <div className="author__inform">
                    {user && <span className="author__inform-name" itemProp="author creator">{user.username}</span>}
                    {date && <span className="author__inform-date" itemProp="datePublished commentTime">{date}</span>}
                    {isTimeToRead && <TimeToRead textLength={textLength}/>}
                </div>
            </div>
        );
    }
}

export default Author;