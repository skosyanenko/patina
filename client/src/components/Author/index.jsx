import React, { Component } from 'react';
import Link from 'next/link';
import TimeToRead from 'components/TimeToRead';
import { returnNameLetters } from 'config/config';

class Author extends Component {

    render() {
        const { isTimeToRead, textLength, date, user } = this.props;

        return (
            <div className="author">
                { user &&
                    <div className="author__avatar">
                        { user && user.avatar
                            ?
                            <Link as={`/profile/${user.id}`} href={`/profile/${user.id}`}>
                                <a>
                                    <img src={user.avatar} alt="" className="author__avatar-img"/>
                                </a>
                            </Link>
                            :
                            <div className="author__avatar-name">{returnNameLetters(`${user.username}`)}</div>
                        }
                    </div>
                }
                <div className="author__inform">
                    { user &&
                        <Link as={`/profile/${user.id}`} href={`/profile/${user.id}`}>
                            <a className="author__inform-name" itemProp="author creator">{user.username}</a>
                        </Link>
                    }
                    { date && <span className="author__inform-date" itemProp="datePublished commentTime">{date}</span>}
                    { isTimeToRead && <TimeToRead textLength={textLength}/>}
                </div>
            </div>
        );
    }
}

export default Author;