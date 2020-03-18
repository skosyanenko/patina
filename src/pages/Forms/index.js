import React, {useState, useEffect} from 'react';
import FormManager from 'components/Forms/FormManager';
import ChangeList from './ChangeList';
import UndefinedPage from '../UndefinedPage';
import {formRoutes} from 'config/config';

const AddForm = ({match}) => {

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
    }

    if (type === 'registration') {
        return <FormManager {...config[type]}
                            prefix={'registration'}
                            classPrefix={"registration__grid"}
                            button={"Зарегистрироваться"}
        />;
    } else {
        if (type !== 'top' && type !== 'review') {
            return <div className="change-form">
                <FormManager {...config[type]}/>
                <ChangeList API={type}/>
            </div>;
        } else {
            return <FormManager {...config[type]}/>;
        }
    }
};

export default AddForm;
