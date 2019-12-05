import React from 'react'
import EventsTitle from '../components/Events/EventsTitle'
import EventsGrid from '../components/Events/EventsGrid'
import Layout from '../components/Layouts/Layout'

const EventsPage = () => (
    <Layout>
        <EventsTitle/>
        <div className='content'>
            <EventsGrid/>
        </div>
    </Layout>
);

export default EventsPage;
