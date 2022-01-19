import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import moment from 'moment'
function CalenderComponent() {
    const [date, setDate] = useState(new Date());

    const handleChangeDate = (e)=>{
        setDate(e)
    }
  return (
      <div className="calendar-wrapper">
          <Calendar 
            value={date}
            onChange={handleChangeDate}
          />

          {/* <p >{moment(date).format("MMMM DD YYYY")}</p> */}
      </div>
  )
}

export default CalenderComponent;
