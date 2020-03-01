import React, {Component} from 'react';
import Author from '../../../pages/Profile/Author';
import '../index.sass';

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
        const {isActive} = this.state;
        return (
            <div className="comments">
                <div className="comments__title">
                    <div className="comments__title-icon"/>
                    <span className="comments__title-counter">1</span>
                </div>
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
            </div>
        )
    }
}

export default CommentForm;