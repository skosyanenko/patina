import React from 'react';
import FormManager from 'components/Forms/FormManager';
import MyHead from 'components/MyHead';
import fields from 'components/Forms/Fields/registration.json'

const RegistrationForm = () => (
    <>
        <MyHead
            title={'Регистрация - Patina'}
            description={'Создайте личный профиль для публикации Ваших рецензий и отслеживания, заинтересовавших Вас пользователей'}
            link={'/registration'}
            robots={'all'}
        />
        <FormManager
            fields={fields}
            title={'Регистрация'}
            button={'Зарегистрироваться'}
            classPrefix={'btn-registration'}
            api={'auth/local/register'}
        />
    </>
);

export default RegistrationForm;
