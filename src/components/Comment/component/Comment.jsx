import React, {Component} from 'react';
import Author from '../../../pages/Profile/Author';

class Comment extends Component {

    handleDelete = () => {
        this.props.handleDelete(this.props.keyValue);
    };

    render() {

        return(
            <div className="comments-block">
                <div className="comments-block__wrap">
                    <Author isTimeToRead={false}/>
                    <div className="comments-block__wrap-delete" onClick={this.handleDelete}/>
                </div>
               <div className="comments-block__text">Бесплатный онлайн перевод с английского на русский и обратно, англо-русский словарь с транскрипцией, произношением слов и примерами ...</div>
            </div>
        );
    }
}

export default Comment;