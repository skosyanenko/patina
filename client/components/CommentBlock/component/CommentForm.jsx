import React, { Component } from 'react';
import Author from 'components/Author';

class CommentForm extends Component {
    state = {
        isActive: false
    };

    showActive = () => {
        this.setState(prevState => ({
            isActive: !prevState.isActive
        }))
    };

    handleSubmit = (e) => {

    };

    render(){
        const { isActive } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className="comments-form">
                <div className="comments-form__wrap">
                    <Author isTimeToRead={false}/>
                    <input
                        type="text"
                        placeholder="Напишите комментарий..."
                        name="comment"
                        onClick={this.showActive}
                        className="comments-form__wrap-text"
                    />
                </div>
                <button type="submit" className={`button button-white ${isActive ? 'show' : ''}`}>
                    Опубликовать
                </button>
            </form>
        );
    }
}

export default CommentForm;