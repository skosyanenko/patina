import React, { Component } from 'react';
import ProfileLayout from 'components/ComponentsProfile/wrapComponents/ProfileLayout';
import axios from 'axios';

class Profile extends Component {
    render() {
        const { serverData } = this.props;

        return (
            <ProfileLayout user={serverData}/>
        );
    }
}

export async function getServerSideProps({ params }) {
    const { API_URL } = process.env;

    const serverData = await axios.get(`${API_URL}/users/${params.id}`)
        .then(res => res.data)
        .catch(err => console.log(err));

    return { props: { serverData } };
}

export default Profile;
