import React from "react";
import LayoutEvents from "../components/Layouts/LayoutEvents";
import EventsTitle from "../components/EventsTitle";
import EventsGrid from "../components/EventsGrid";
import("../static/sass/include/_base.sass");

const EventsPage = () => (
  <LayoutEvents>
      <EventsTitle/>
      <div className='content'>
          <EventsGrid/>
      </div>
  </LayoutEvents>
);

export default EventsPage;
