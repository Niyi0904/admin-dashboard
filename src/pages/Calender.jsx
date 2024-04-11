import React from 'react';
import { ScheduleComponent, ViewDirective, ViewsDirective, Day, Week, Agenda, Inject, Resize, DragAndDrop, Month, WorkWeek } from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { scheduleData } from '../data/dummy';
import { Header  } from '../components';


const Calender = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='App' title='Calender' />
      <ScheduleComponent
        height='650px'
        eventSettings={{ dataSource:scheduleData}}
        selectedDates={new Date(2021, 0, 10)}
      >
        <Inject services={[Day, Week, Month, Agenda, WorkWeek, DragAndDrop, Resize]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calender;
