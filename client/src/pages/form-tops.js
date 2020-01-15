import React from 'react';
import FormManager from '../components/Forms/FormManager';
import fields from '../components/Forms/Fields/top';

const FormTopsPage = () => (
    <div className="section--form">
        <FormManager
            fields={fields}
            button={"Добавить"}
            title={"Добавить топ"}
            API={"top"}
        />
    </div>
);

export default FormTopsPage;
