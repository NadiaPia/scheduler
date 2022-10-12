import { useState, useEffect } from "react";
import axios from "axios";
import {getAppointmentsForDay} from "helpers/selectors"
export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  //do request to the api for getting days and appointments and putting it to the setState----------------------
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {      
        setState((prev) => ({
          ...prev,
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data,
        }));
      });
  }, []);
  
  const setDay = (day) => setState({ ...state, day });
  const updateSpots = (newState) => {
    const days = [...state.days]
    for (let day of days) {
      const dayApps = getAppointmentsForDay(newState, day.name)
      const emptyApp = dayApps.filter(app => !app.interview)
      const spots = emptyApp.length
      day.spots = spots
    }    
    return {...newState, days};
  } 

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
      const newState = {...state, appointments};
      const newStateWithSpots = updateSpots(newState)
      setState(newStateWithSpots);
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
      const newState =   {...state, appointments};
      const newStateWithSpots = updateSpots(newState)
      setState(newStateWithSpots);
    });
  }
  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };
}