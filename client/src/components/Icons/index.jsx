import React, { Component } from 'react';
import { withRouter } from 'next/router';
import Auth from 'services/Authorization';
import axios from 'axios';

class Icons extends Component {
    state = {
        isLiked: false,
        likes: 0,
        views: 0,
        date: ''
    };

    componentDidMount() {
        this.isAuthorizationUser();
        this.setState({
            likes: this.props.likes && this.props.likes.length || 0,
            views: this.props.views || 0,
            date: this.props.date || ''
        })
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            this.isAuthorizationUser();
            this.setState({
                likes: this.props.likes && this.props.likes.length || 0,
                views: this.props.views || 0,
                date: this.props.date || ''
            })
        }
    };

    isAuthorizationUser = () => {
        if (Auth.token && Auth.token.length > 0) {
            this.isLiked();
        } else {
            this.props.toggleModal();
        }
    };

    isLiked = () => {
        const { likes } = this.props;
        const userId = Auth.userInfo.id;

        likes && likes.map(item => {
            if (item.user === userId) {
                this.setState({
                    isLiked: true
                })
            }
        })
    };

    handleClick = () => {
        const { likes } = this.props;
        const userId = Auth.userInfo.id;

        if (this.state.isLiked) {
            let idLike = '';
            likes && likes.map(item => {
                if (item.user === userId) {
                    idLike = item.id;
                }
            })
            this.deleteLike(idLike);
        } else {
            const like = this.state.likes;
            this.setState({
                isLiked: true,
                likes: like + 1
            });
            this.addLike();
        }
    };

    addLike = () => {
        const { API_URL } = process.env;
        const { idContent, typeContent } = this.props;

        const options = Auth.token && {
            headers: { Authorization: `Bearer ${Auth.token}` }
        };
        const data = {counter: true};

        axios.post(`${API_URL}/${typeContent}/${idContent}/like`, data, options)
            .then(res => {
                res.status === 200 &&
                this.setState({isLiked: true});
            })
            .catch(err => {
                console.log('Ошибка при отправке формы, попробуйте позже!' + err);
            });
    };

    deleteLike = (idLike) => {
        const { API_URL } = process.env;

        const like = this.state.likes;

        const options = Auth.token && {
            headers: { Authorization: `Bearer ${Auth.token}` }
        };

        axios.delete(`${API_URL}/likes/${idLike}`, options)
            .then(res => {
                res.status === 200 &&
                this.setState({
                    isLiked: false,
                    likes: like - 1
                });
            })
            .catch(err => {
                console.log('Ошибка при отправке формы, попробуйте позже!' + err);
            });
    }

    render() {
        const { isLiked, likes } = this.state;
        const { router } = this.props;

        if (router.asPath.includes('reviews') || router.asPath.includes('profile')) {
            return (
                <div className="like-review" itemScope itemType="http://schema.org/Rating">
                    <span className="like-review__counter" itemProp="reviewRating">{ likes }</span>
                    <div className={`like-review__icon ${isLiked && 'active'}`}
                         onClick={this.handleClick}
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
                                 onClick={this.handleClick}
                            />
                        </div>
                    ))}
                </div>
            )
        }
    }
}

export default withRouter(Icons);
