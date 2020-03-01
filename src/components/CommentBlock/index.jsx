import React, {Component} from 'react';
import CommentForm from './component/CommentForm';
import CommentList from './component/CommentList';
import axios from "axios";

class CommentBlock extends Component {
    state = {
        comments: []
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

    componentDidMount() {
        this.fetchCommentsFromServer().then(res => {
            this.setState({comments: res})
        });
    }
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
        // let newComments = comments.concat([comment]);
        //
        // this.setState({
        //     data: newComments
        // });
        // $.ajax({
        //     url: this.props.url,
        //     dataType: 'json',
        //     type: 'POST',
        //     data: comment,
        //     success: (data) => {
        //         this.setState({data: data});
        //     },
        //     error: (xhr, status, err) => {
        //         console.error(this.proprs.url, status, err.toString());
        //     }
        // });
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
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
                <CommentList  handleDelete={this.handleDelete}/>
            </div>
        )
    }
}

export default CommentBlock;