import React from 'react';
import fields from '../components/Forms/Fields/user';
import FormManager from '../components/Forms/FormManager';

const RegistrationPage = () => (
  <div className="section--form">
      <FormManager fields={fields}
                   title={"Регистрация"}
                   button={"Зарегистрироваться"}
                   classNamePrefix={"registration"}
                   classNamePref={"registration__grid"}
      />
  </div>
);

export default RegistrationPage;
