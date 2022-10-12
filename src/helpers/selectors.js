//... returns an array of appointments for that day
export function getAppointmentsForDay(state, day) { 
  
  if (state.days.length === 0) {
    return [];
  }
  const filteredDays = state.days.filter(elem => elem.name === day);
  if (filteredDays.length === 0) {
    return [];
  }
  let apps = filteredDays[0].appointments;
  let result = [];
  for (let app of apps) {
    result.push(state.appointments[app])
  }  
  return result;
}

//returns an object with full student and interviewer data
export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }  
  const id = interview.interviewer;
  const interviewer = state.interviewers[id];
  return {
    student: interview.student,
    interviewer: interviewer
  };
}

//... returns an array of available interviewers for that day
export function getInterviewersForDay(state, day) {
  if (state.days.length === 0) {
    return [];
  }
  const filteredDays = state.days.filter(elem => elem.name === day);  
  if (filteredDays.length === 0) {
    return [];
  }
  let ints = filteredDays[0].interviewers;
  let result = [];
  for (let int of ints) {
    result.push(state.interviewers[int])
  }  
  return result;
  
}
