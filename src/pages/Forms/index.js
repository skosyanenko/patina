import React, { useState, useEffect } from 'react';
import { formRoutes } from 'config/config';
import FormManager from 'components/Forms/FormManager';
import ChangeList from './ChangeList';
import UndefinedPage from '../UndefinedPage';

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
        switch (type) {
            case 'charts':
            case 'review':
                return <FormManager {...config[type]}/>;
            case 'registration':
                return <FormManager {...config[type]}
                                    prefix={'registration'}
                                    classPrefix={"registration__grid"}
                                    button={"Зарегистрироваться"}/>;
            default: return <div className="change-form">
                <FormManager {...config[type]}/>
                <ChangeList API={type}/>
            </div>;
        }
    }
};

export default AddForm;
