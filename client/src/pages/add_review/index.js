import React, { Component } from 'react';
import FormManager from 'components/Forms/FormManager';
import fields from 'components/Forms/Fields/reviews.json'
import MyHead from 'components/MyHead';
import Auth from 'services/Authorization';

class AddReviewForm extends Component {
    state = {
        isEntered: false
    };

    componentDidMount() {
        if ( Auth.token && Auth.token.length > 0) {
            this.setState({isEntered: true})
        } else {
            this.setState({isEntered: false})
        }
    };

    render () {
        const { isEntered } = this.state;
        return (
            <>
                <MyHead
                    title={'Добавить рецензию - Patina'}
                    description={'Добавить рецензию или отзыв на любое литературное произведение - Patina'}
                    link={'/add_review'}
                    robots={'all'}
                />
                { isEntered ?
                    <FormManager
                        fields={fields}
                        title={'Добавить рецензию'}
                        button={'Добавить'}
                        classPrefix={''}
                        api={'reviews'}
                    />
                    :
                    <div className="add-review">
                        <span className="add-review__title">
                            К сожалению, эта страница доступна только для зарегистрированных пользователей. Войдите или зарегистрируйтесь, чтобы опубликовать рецензию.
                        </span>
                    </div>
                }
            </>
        )
    }
}

export default AddReviewForm;
