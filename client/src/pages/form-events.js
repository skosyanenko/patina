import React from 'react';
import FormManager from '../components/Forms/FormManager';
import fields from '../components/Forms/Fields/events';

const FormEventsPage = () => (
    <div className="section--form">
        <FormManager
            fields={fields}
            button={"Добавить"}
            title={"Добавить эвент"}
            API={"events"}
        />
    </div>
);

export default FormEventsPage;
