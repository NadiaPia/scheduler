import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "components/InterviewerListItem";


export default function InterviewerList(props) {
  const allInterviewers = props.interviewers;
  console.log(allInterviewers)
  const listInterviewers = allInterviewers.map((interviewer) =>
  <InterviewerListItem
      key={interviewer.id}      
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={interviewer.id === props.value}      
      setInterviewer = {() => props.onChange(interviewer.id)}
    />
  
  )
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{listInterviewers}</ul>
    </section>
  );
}

