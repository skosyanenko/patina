import React from 'react';
import FormManager from 'components/Forms/FormManager';
import fields from 'components/Forms/Fields/edit.json';

const ProfileEdit = ({ user }) => {
    return (
        <FormManager
            fields={fields}
            title={''}
            button={'Сохранить'}
            classPrefix={'btn-registration'}
            api={`users/${user.id}`}
            method="put"
            defaultValues={{
                city: user.city,
                likeAuthors: user.likeAuthors,
                likeGenres: user.likeGenres,
                likeBooks: user.likeBooks
            }}
        />
    );
}

export default ProfileEdit;