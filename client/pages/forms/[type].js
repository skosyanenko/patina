import React, { useState, useEffect } from 'react';
import { formRoutes } from 'config/config';
import FormManager from 'components/Forms/FormManager';
import UndefinedPage from 'pages/404';

const AddForm = ({ match }) => {

    const type = match.params.type;

    const [config, setConfig] = useState(formRoutes);

    const setCurrentForm = async () => {
        const result = formRoutes[type];

        await import(`components/Forms/Fields/${type}`)
            .then(data => {
                result.API = type;
                result.fields = data.default;
            })
            .catch(err => console.log(err));

        const resState = {...config, [type]: result};

        setConfig(resState);
    };

    useEffect(() => {
        setCurrentForm();
    }, []);

    if (!Object.keys(formRoutes).includes(type)) {
        return <UndefinedPage />;
    } else {
        return <FormManager {...config[type]}/>;
    }
};

export default AddForm;
