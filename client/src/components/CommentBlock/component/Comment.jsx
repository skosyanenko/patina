import React, { Component } from 'react';
import { returnDatePublish } from 'config/config';
import Auth from 'services/Authorization';
import axios from 'axios';

class Comment extends Component {
    state = {
        user: []
    };

    componentDidMount() {
        this.getItems();
    };

    handleCommentDelete = () => {
        const { API_URL } = process.env;
        const { item: {id} } = this.props;

        const options = Auth.token && {
            headers: { Authorization: `Bearer ${Auth.token}` }
        };

        axios.delete(`${API_URL}/comments/${id}`, options)
            .then(res => {
                res.status === 200 &&
                this.setState({success: true});
            })
            .catch(err => {
                console.log('Ошибка при отправке формы, попробуйте позже!' + err);
            });
    };

    getItems = () => {
        const { API_URL } = process.env;
        const { item: {author} } = this.props;

        axios.get(`${API_URL}/users/${author}`)
            .then(res => {
                res.data &&
                this.setState({
                    user: res.data
                })
            })
            .catch(err => {
                console.log('Ошибка получения элементов из бд' + err)
            });
    };

    render() {
        const { item: {comment, author, created_at, id, authorName, avatar} } = this.props;

        return(
            <div className="comments-block" itemScope itemType="http://schema.org/UserComments">
                <div className="comments-block__wrap">
                    <div className="author">
                        <div className="author__avatar">
                              <img src={avatar} alt="" className="author__avatar-img"/>
                        </div>
                        <div className="author__inform">
                            <span className="author__inform-name" itemProp="author creator">{authorName}</span>
                            <span className="author__inform-date" itemProp="datePublished commentTime">{returnDatePublish(created_at)}</span>
                        </div>
                    </div>
                    {Auth.userInfo.id === author
                        ?
                        <div
                            className="comments-block__wrap-delete"
                            onClick={this.handleCommentDelete}
                        />
                        :
                        ''
                    }
                </div>
               <div className="comments-block__text" itemProp="commentText">{comment}</div>
            </div>
        );
    }
}

export default Comment;