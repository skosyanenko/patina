import React, { Component } from 'react';
import ProfileLayout from 'components/ComponentsProfile/wrapComponents/ProfileLayout';

class Profile extends Component {
    render() {
        const { toggleModal } = this.props;
        return (
            <ProfileLayout toggleModal={toggleModal}/>
        );
    }
}

export default Profile;
