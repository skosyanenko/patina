import React from 'react';
import EventsTitle from '../components/PageEvents/EventsTitle';
import EventsGrid from '../components/PageEvents/EventsGrid';

const EventsPage = () => (
    <>
        <EventsTitle/>
        <div className="content">
            <EventsGrid/>
        </div>
    </>
);

export default EventsPage;
