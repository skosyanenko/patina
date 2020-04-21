import React, { Component } from 'react';
import CommentForm from './component/CommentForm';
import CommentList from './component/CommentList';
import axios from 'axios';

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
        return await axios.get('/api/v1/comments')
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
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
                <CommentList  handleDelete={this.handleDelete}/>
            </div>
        )
    }
}

export default CommentBlock;