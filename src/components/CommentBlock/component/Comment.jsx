import React, { Component } from 'react';
import Author from 'components/Author';

class Comment extends Component {

    // handleDelete = () => {
    //     this.props.handleDelete(this.props.keyValue);
    // };

    render() {
        const { createdAt, firstName, lastName } = this.props;

        return(
            <div className="comments-block" itemScope itemType="http://schema.org/UserComments">
                <div className="comments-block__wrap">
                    <Author isTimeToRead={false}
                            date={createdAt}
                            name={firstName}
                            surname={lastName}
                    />
                    <div className="comments-block__wrap-delete"
                         //onClick={this.handleDelete}
                    />
                </div>
               <div className="comments-block__text" itemProp="commentText">Бесплатный онлайн перевод с английского на русский и обратно, англо-русский словарь с транскрипцией, произношением слов и примерами ...</div>
            </div>
        );
    }
}

export default Comment;