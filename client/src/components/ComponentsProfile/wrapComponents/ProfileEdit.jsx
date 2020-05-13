import React, {Component} from 'react';
import FormManager from 'components/Forms/FormManager';
import fields from 'components/Forms/Fields/edit.json'

class ProfileEdit extends Component {
    render() {
        const { user: {id} } = this.props;
        return (
            <div>
                <FormManager
                    fields={fields}
                    title={''}
                    button={'Сохранить'}
                    classPrefix={'btn-registration'}
                    api={`user/${id}`}
                />
            </div>
        );
    }
}

export default ProfileEdit;