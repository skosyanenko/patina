import React, { Component } from 'react';
import { returnDatePublish } from 'config/config';
import CommentForm from './component/CommentForm';
import Auth from 'services/Authorization';
import axios from 'axios';

class CommentBlock extends Component {
    state = {
        comments: [],
        addComment: {},
        deleteComment: {}
    };

    componentDidUpdate(prevProps, prevState) {
        const { addComment, deleteComment, comments } = this.state;

        if (prevProps.comments !== this.props.comments) {
            this.setState({
                comments: this.props.comments
            })
        }

        if (prevState.addComment !== addComment) {
            this.setState({
                comments: [addComment, ...comments]
            })
        }

        if (prevState.deleteComment !== deleteComment) {
            this.state.comments.map(item => {
                if (item.id === deleteComment.id) {
                    comments.splice(comments.indexOf(item), 1);
                    this.setState({
                        comments: comments,
                        deleteComment: []
                    })
                }
            })
        }
    };

    handleCommentDelete = id => {
        const { API_URL } = process.env;

        const options = Auth.token && {
            headers: { Authorization: `Bearer ${Auth.token}` }
        };

        axios.delete(`${API_URL}/comments/${id}`, options)
            .then(res => {
                res.status === 200 &&
                this.setState({ deleteComment: res.data });
            })
            .catch(err => {
                console.log('Ошибка при отправке формы, попробуйте позже!' + err);
            });
    };

    updateCommentsArray = (newState = {}) => {
        this.setState({...newState})
    };

    render() {
        const { comments } = this.state;
        const { idContent, typeContent } = this.props;

        return(
            <div className="comments-wrapper">
                <div className="comments__title">
                    <div className="comments__title-icon"/>
                    <span className="comments__title-counter">{comments.length}</span>
                </div>
                {Auth.isAuth &&
                    <CommentForm
                        idContent={idContent}
                        typeContent={typeContent}
                        updateCommentsArray={this.updateCommentsArray}
                    />
                    || ''
                }
                { comments && comments.map(({ authorInfo, created_at, comment, id }, key) => (
                    <div className="comments-block" itemScope itemType="http://schema.org/UserComments" key={key}>
                        <div className="comments-block__wrap">
                            <div className="author">
                                <div className="author__avatar">
                                    {authorInfo && <img src={authorInfo.avatar} alt="" className="author__avatar-img"/>}
                                </div>
                                <div className="author__inform">
                                    {authorInfo && <span className="author__inform-name" itemProp="author creator">{authorInfo.username}</span>}
                                    <span className="author__inform-date" itemProp="datePublished commentTime">{returnDatePublish(created_at)}</span>
                                </div>
                            </div>
                            { Auth.isAuth && Auth.userInfo.id === authorInfo.userId &&
                                <div
                                    className="comments-block__wrap-delete"
                                    onClick={() => this.handleCommentDelete(id)}
                                />
                                || null
                            }
                        </div>
                        <div className="comments-block__text" itemProp="commentText">{comment}</div>
                    </div>
                ))}
            </div>
        );
    }
}

export default CommentBlock;