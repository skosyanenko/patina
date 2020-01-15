import React from 'react';
import FormManager from '../components/Forms/FormManager';
import fields from '../components/Forms/Fields/author';

const FormAuthorPage = () => (
    <div className="section--form">
        <FormManager
            fields={fields}
            button={"Добавить"}
            title={"Добавить писателя"}
            API={"author"}
        />
    </div>
);

export default FormAuthorPage;
