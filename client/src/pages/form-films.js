import React from 'react';
import FormManager from '../components/Forms/FormManager';
import fields from '../components/Forms/Fields/film';

const FormFilmsPage = () => (
    <div className="section--form">
        <FormManager
            fields={fields}
            button={"Добавить"}
            title={"Добавить экранизацию"}
            API={"film"}
        />
    </div>
);

export default FormFilmsPage;
