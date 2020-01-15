import React from 'react';
import FormManager from '../components/Forms/FormManager';
import fields from '../components/Forms/Fields/book';

const FormBookPage = () => (
    <div className="section--form">
        <FormManager
            fields={fields}
            button={"Добавить"}
            title={"Добавить книгу"}
            API={"book"}
        />
    </div>
);

export default FormBookPage;
