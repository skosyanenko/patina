import React, { Component } from 'react';
import { withRouter } from 'next/router';
import Auth from 'services/Authorization';

class Icons extends Component {
    state = {
        isLiked: false,
        likes: 0,
        views: 0,
        date: ''
    };

    static getDerivedStateFromProps(nextProps) {
        if (nextProps.date || nextProps.likes || nextProps.views) {
            return {
                likes: nextProps.likes,
                views: nextProps.views,
                date: nextProps.date
            }
        }
    };

    addLike = () => {
        if ( Auth.token && Auth.token.length > 0) {
            const like = this.state.likes;
            this.setState(prevState => ({
                isLiked: !prevState.isLiked,
                likes: like + 1
            }))
        } else {
            this.props.toggleModal();
        }
    };

    render() {
        const { isLiked, likes } = this.state;
        const { router } = this.props;

        if (router.pathname.includes('reviews')) {
            return (
                <div className="like-review" itemScope itemType="http://schema.org/Rating">
                    <span className="like-review__counter" itemProp="reviewRating">{ likes }</span>
                    <div className={`like-review__icon ${isLiked && 'active'}`}
                         onClick={this.addLike}
                    />
                </div>
            )
        } else {
            return (
                <div className="icons">
                    {['likes', 'date', 'views'].map((item, key) => (
                        <div className="icons__wrapper" key={key}>
                            <div className="icons__counter" itemProp="datePublished dateModified" content={this.state.date}>
                                {this.state[item]}
                            </div>
                            <div className={`icons__${item} ${isLiked && 'active'}`}
                                 onClick={this.addLike}
                            />
                        </div>
                    ))}
                </div>
            )
        }
    }
}

export default withRouter(Icons);
