import InterviewerList from "../InterviewerList";
import Button from "../Button";
import React, { useState } from "react";

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer?.id || null); //? in props.interviewer?.id 
  //means that if the props.interviewer object is undefined and we want find .id it won't lead to the Error

  const reset = () => {    
    setStudent("")
    setInterviewer(null);
  };

  const cancel = () => {
    reset()
    props.onCancel()
  }
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(event) => setStudent(event.target.value)}
          />
        </form>
        <InterviewerList
        interviewers={props.interviewers}
        value={interviewer}
        onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={() => props.onSave(student, interviewer)}>Save</Button>
        </section>
      </section>
    </main>
  );
  
}
