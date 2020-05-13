import React, { Component } from 'react';
import CommentForm from './component/CommentForm';
import CommentList from './component/CommentList';
import axios from 'axios';
import Auth from 'services/Authorization';

class CommentBlock extends Component {
    state = {
        comments: []
    };

    componentDidMount() {
        this.fetchCommentsFromServer().then(res => {
            this.setState({comments: res})
        });
    };

    fetchCommentsFromServer = async () => {
        const { API_URL } = process.env;
        return await axios.get(`${API_URL}/comments`)
            .then(res => {
                if (res.data) {
                    return res.data;
                }
            })
            .catch(err => {
                console.log('Ошибка получения элементов из бд' + err)
            });
    };

    handleCommentSubmit = async (comment) =>{
        return await axios.post('/api/v1/comments')
            .then(res => {
                    if (res.data) {
                    return res.data;
                }
            })
            .catch(err => {
                console.log('Ошибка получения элементов из бд' + err)
            });
    };

    handleDelete = (index) => {
        let comments = this.state.data;

        comments.splice(index, 1);

        this.setState({
            data: comments
        })
    };

    render() {
        return(
            <div className="comments-wrapper">
                <div className="comments__title">
                    <div className="comments__title-icon"/>
                    <span className="comments__title-counter">1</span>
                </div>
                {Auth.token && Auth.token.length > 0 &&
                    <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
                    || ''
                }
                <CommentList  handleDelete={this.handleDelete}/>
            </div>
        )
    }
}

export default CommentBlock;