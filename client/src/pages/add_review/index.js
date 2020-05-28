import React from 'react';
import FormManager from 'components/Forms/FormManager';
import fields from 'components/Forms/Fields/reviews.json'
import MyHead from 'components/MyHead';
import Authorization from 'services/Authorization';

const AddReviewForm = () => {
    const isAuth = Authorization.isAuth;

    return (
        <>
            <MyHead
                title={'Добавить рецензию - Patina'}
                description={'Добавить рецензию или отзыв на любое литературное произведение - Patina'}
                link={'/add_review'}
                robots={'all'}
            />
            { isAuth ?
                <FormManager
                    fields={fields}
                    title={'Добавить рецензию'}
                    button={'Добавить'}
                    classPrefix={''}
                    api={'reviews'}
                    successTitle={'Форма успешно отправлена!'}
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

export default AddReviewForm;
