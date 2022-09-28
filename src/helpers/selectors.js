

export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
  if(state.days.length === 0) {
    return []
  }
  const filteredDays = state.days.filter(elem => elem.name === day);
  if(filteredDays.length === 0) {
    return []
  }
  let apps = filteredDays[0].appointments
  let result = [];
  for(let app of apps) {
    result.push(state.appointments[app])
  }
  //console.log(filteredDays)
  console.log("resultresultresultresultresultresultresultresult", result)
  return result
}

export function getInterview(state, interview) {
  if(!interview) {
    return null;
  }
  console.log(interview)
  const id = interview.interviewer;
  const interviewer = state.interviewers[id];
  return {
    student: interview.student,
    interviewer: interviewer
  }
}

export function getInterviewersForDay(state, day) {
  //... returns an array of appointments for that day
  if(state.days.length === 0) {
    return []
  }
  const filteredDays = state.days.filter(elem => elem.name === day);
  // console.log("++++++++++++++++++++++++++++++++++++++++", state.days)
  console.log("++++++++++++++++++++++++++++++++++++++++", state, day)

  if(filteredDays.length === 0) {
    return []
  }
  let ints = filteredDays[0].interviewers
  let result = [];
  for(let int of ints) {
    result.push(state.interviewers[int])
  }
  console.log(filteredDays)
  return result
  
}
