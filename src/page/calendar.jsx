import { useState } from 'react';
// import Calendar from 'react-calendar';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'



// function Calendars() {
  export default function Calendars() {
    return (
      <div>
        <h1>Demo App</h1>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView='dayGridMonth'
          weekends={false}
          // events={events}
          eventContent={renderEventContent}
        />
      </div>
    )
  }
  
  // a custom render function
  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }
// export default Calendars