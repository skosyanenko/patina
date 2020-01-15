import React from 'react';
import FormManager from '../components/Forms/FormManager';
import fields from '../components/Forms/Fields/categories';

const FormCategoriesPage = () => (
    <div className="section--form">
        <FormManager
            fields={fields}
            button={"Добавить"}
            title={"Добавить категорию"}
            API={"categories"}
        />
    </div>
);

export default FormCategoriesPage;
