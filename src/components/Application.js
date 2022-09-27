import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "components/Appointment";
import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import {
  getAppointmentsForDay,
  getInterview,
  getInterviewersForDay,
} from "helpers/selectors";


export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const interviewers = getInterviewersForDay(state, state.day);

  function bookInterview(id, interview) {
    
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };     
      return axios.put(`/api/appointments/${id}`, {interview})      
    .then(() => {      
      setState({...state, appointments});      
    });    
  }

  function cancelInterview (id) {
    const deleteInterview = {
      ...state.appointments[id],
      interview: null
    }
    const appointments = {
      ...state.appointments, 
      [id]: deleteInterview
    }
    return axios.delete(`/api/appointments/${id}`)
    .then(() => {      
      setState({...state, appointments});
    });   

  }

  const schedule = dailyAppointments.map((appointment) => {
    
    console.log("appointmenttttttttttttt", appointment);
    const interview = getInterview(state, appointment.interview);

    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        //student={student}
        interview={interview}
        //interviewer={interviewer}
        interviewers={interviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}

      />
    );
  });
  //do request to the api for getting days and appointments and putting it to the setState----------------------
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      //console.log(all[1].data)
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);
  //----------------------------------------------------------------------------

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} value={state.day} onChange={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
