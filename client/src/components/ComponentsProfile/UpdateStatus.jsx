import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputText from 'components/Forms/Input';
import axios from 'axios';
import Auth from 'services/Authorization';

const UpdateStatus = ({ status, id, userStatus, updateStatusState }) => {
    const { handleSubmit, register, setValue, getValues, errors, formState, control } = useForm({
        defaultValues: { status: status }
    });

    const initialState = {
        statusText: status
    };

    const [state, setState] = useState(initialState);

    const onSubmit = values => {
        updateUserStatus(values);
        setState({
            statusText: values.status
        })
    };

    const updateUserStatus = data => {
        const { API_URL } = process.env;

        const options = Auth.token && {
            headers: { Authorization: `Bearer ${Auth.token}` }
        } || null;

        axios.put(`${API_URL}/users/${id}`, data, options)
            .then(res => {
                res.status === 200 &&
                updateStatusState({ userStatus: false, statusText: data.status });
            })
    };

    return (
        <div className={`update-status ${userStatus ? 'active' : ''}`}>
            <form className="update-status__form" onSubmit={handleSubmit(onSubmit)}>
                <InputText
                    name={'status'}
                    label={'Изменить статус'}
                    icon={'pencil'}
                    type={'text'}
                    req={false}
                    register={register}
                    errors={errors}
                    getValues={getValues}
                    onChange={setValue}
                    isSubmit={formState.isSubmitting}
                    control={control}
                />
                <button type="submit" className="update-status__button"/>
            </form>
        </div>
    );
}

export default UpdateStatus;
