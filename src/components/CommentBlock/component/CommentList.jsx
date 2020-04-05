import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {

    render() {
        let handleDelete = this.props.handleDelete;

        return(
          <Comment/>
        )
    }

    // render() {
    //     let handleDelete = this.props.handleDelete;
    //
    //     let commentNodes = this.props.data.map((comment, i) => {
    //         return (
    //             <CommentPublished author={comment.author} keyValue={i} handleDelete={handleDelete}>
    //                 {comment.text}
    //             </CommentPublished>
    //         )
    //     });
    //     return (
    //         <CSSTransition transitionName="example">
    //             {commentNodes}
    //         </CSSTransition>
    //     )
    // }
}

export default CommentList;