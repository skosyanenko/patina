import React, { Component } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { counterLetters, returnDatePublish } from 'config/config';
import TimeToRead from 'components/TimeToRead';

const { API_URL } = process.env;

class ProfileFollowing extends Component {
    state = {
        followsProps: this.props.user.follow,
        follows: [],
        publish: []
    };

    componentDidMount() {
        this.getFollows();
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.follows !== this.state.follows) {
            this.getPublish();
        }
    };

    getFollows = () => {
        const { followsProps } = this.state;

        followsProps.map(item => {
            axios.get(`${API_URL}/users/${item.id}`)
                .then(res => {
                    if (res.status === 200) {
                        const followsPublish = {
                            avatar: res.data.avatar,
                            userId: res.data.id,
                            userName: res.data.username,
                            reviews: res.data.reviews
                        };
                        this.setState(state => ({
                            follows: [followsPublish, ...state.follows]
                        }))
                    }})
              .catch(err => console.log('Ошибка при отправке формы, попробуйте позже!' + err));
        });
    };

    getPublish = () => {
        const { follows } = this.state;

        follows && follows.map(item => {
            item.reviews.map(review => {
                const publishq = {
                    avatar: item.avatar,
                    userId: item.userId,
                    userName: item.userName,
                    review: review
                };
                this.setState(state => ({
                    publish: [publishq, ...state.publish]
                }))
            })
        })
    };

    render() {
        const { authorization } = this.props;
        const { publish } = this.state;

        return (
            <>
                {authorization &&
                    <div className="page--follow">
                        {publish && publish.length > 0 &&
                            <>
                                <div className="page--profile-title">Последние публикации:</div>
                                <div className="page--profile-wrap">
                                    {publish.map((item, key) => (
                                        <div className="follows" key={key}>
                                            <div className="author">
                                                <div className="author">
                                                    <img src={item.avatar} alt="" className="author__avatar-img"/>
                                                </div>
                                                <div className="author__inform">
                                                    <span className="author__inform-name" itemProp="author creator">{item.userName}</span>
                                                    <span className="author__inform-date" itemProp="datePublished commentTime">
                                                        {returnDatePublish(item.review.created_at)}
                                                    </span>
                                                    <TimeToRead textLength={counterLetters(item.review.description)}/>
                                                </div>
                                            </div>
                                            <div className="follows__wrap">
                                                <Link as={`/reviews/${item.review.id}`} href={`/reviews/[id]`}>
                                                    <a className="follows__wrap-title">
                                                        {item.review.title}
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                            ||
                            <div className="page--profile-title">Вы ни на кого не подписаны.</div>
                        }
                    </div>
                    || ''
                }
            </>
        );
    }
}

export default ProfileFollowing;