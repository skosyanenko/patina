import React from 'react'
import EventsTitle from '../components/Events/EventsTitle'
import EventsGrid from '../components/Events/EventsGrid'
import Layout from '../components/Layouts/Layout'

const EventsPage = () => (
    <Layout
        mainClassName={'section section--events'}
        isRightMenu={false}
    >
        <EventsTitle/>
        <div className='content'>
            <EventsGrid/>
        </div>
    </Layout>
);

export default EventsPage;
