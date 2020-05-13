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

    componentDidMount() {
        this.setState({
            likes: this.props.likes || 0,
            views: this.props.views || 0,
            date: this.props.date || ''
        })
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            this.setState({
                likes: this.props.likes || 0,
                views: this.props.views || 0,
                date: this.props.date || ''
            })
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

        if (router.asPath.includes('reviews') || router.asPath.includes('profile')) {
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
