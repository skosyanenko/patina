import React, {useState, useEffect} from 'react';
import FormManager from 'components/Forms/FormManager';

const AddForm = ({match}) => {

    const type = match.params.type;

    const formStore = {
        book: {title: 'Добавить книгу'},
        film: {title: 'Добавить экранизацию'},
        author: {title: 'Добавить писателя'},
        categories: {title: 'Добавить категорию'},
        top: {title: 'Создать подборку книг'},
        review: {title: 'Добавить рецензию'},
        events: {title: 'Добавить эвент'},
        news: {title: 'Добавить новость'}
    };

    const [config, setConfig] = useState(formStore);

    const setCurrentForm = async () => {
        const result = formStore[type];

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

    return <FormManager {...config[type]} prefix={'form'}/>;
};

export default AddForm;
