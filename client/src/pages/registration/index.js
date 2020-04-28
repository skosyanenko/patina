import React from 'react';
import FormManager from 'components/Forms/FormManager';
import fields from 'components/Forms/Fields/registration.json'

const RegistrationForm = () => (
    <FormManager
        fields={fields}
        title={'Регистрация'}
        button={'Зарегистрироваться'}
        classPrefix={'btn-registration'}
        api={'auth/local/register'}
    />
);

export default RegistrationForm;
