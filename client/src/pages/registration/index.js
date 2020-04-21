import React from 'react';
import FormManager from 'components/Forms/FormManager';
import fields from 'components/Forms/Fields/registration.json'

const RegistrationForm = () => (
    <FormManager {...fields}
        prefix={'registration'}
        classPrefix={"registration__grid"}
        button={"Зарегистрироваться"}
        title={'Регистрация'}
    />
)

export default RegistrationForm;
