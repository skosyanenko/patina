import React, { Component } from 'react';
import CommentForm from './component/CommentForm';
import Auth from 'services/Authorization';
import Comment from "./component/Comment";

class CommentBlock extends Component {
    state = {
        comments: [],
        authorization: false
    };

    componentDidUpdate(prevProps, prevState) {
        const { comments } = this.props;
        if (prevProps.comments !== comments) {
            this.setState({
                comments: comments
            })
        }
    };

    render() {
        const { comments } = this.state;
        const { idContent, typeContent } = this.props;

        return(
            <div className="comments-wrapper">
                <div className="comments__title">
                    <div className="comments__title-icon"/>
                    <span className="comments__title-counter">1</span>
                </div>
                {Auth.token && Auth.token.length > 0 &&
                    <CommentForm
                        idContent={idContent}
                        typeContent={typeContent}
                    />
                    || ''
                }
                {comments && comments.map((item, key) => (
                    <Comment
                        typeContent={typeContent}
                        item={item}
                        key={key}
                    />
                ))}
            </div>
        )
    }
}

export default CommentBlock;