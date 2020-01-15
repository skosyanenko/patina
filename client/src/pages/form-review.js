import React from 'react';
import FormManager from '../components/Forms/FormManager';
import fields from '../components/Forms/Fields/review';

const FormReviewPage = () => (
    <div className="section--form">
        <FormManager
            fields={fields}
            button={"Добавить"}
            btnStyle={"review-button"}
            title={"Добавить рецензию"}
            API={"review"}
        />
    </div>
);

export default FormReviewPage;
