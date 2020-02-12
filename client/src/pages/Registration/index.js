import React from 'react';
import fields from '../../components/Forms/Fields/user';
import FormManager from '../../components/Forms/FormManager';

const RegistrationPage = () => (

  <FormManager fields={fields}
               API={"users"}
               title={"Регистрация"}
               button={"Зарегистрироваться"}
               classNamePrefix={"registration"}
               classNamePref={"registration__grid"}
  />
);

export default RegistrationPage;
