# Interview Scheduler Project

## Main features
Interview Scheduler is an application that helps to plan appointments. Depending on the day there are several interviewers who can speak to a student during an available time. The application allows to book appointment at one of five 1-hour timeslots each workday. Every existing appointment can be edited or cancelled.


## Final Product

- ### General view
!["General view"](https://github.com/NadiaPia/scheduler/blob/master/docs/general-view.png)

- ### Appointment with 'Edit' and 'Delete' buttons
!["Appointment"](https://github.com/NadiaPia/scheduler/blob/master/docs/appointment.png)

- ### Add new / edit existing appointment
!["Add new / edit existing"](https://github.com/NadiaPia/scheduler/blob/master/docs/add-or-edit.png)

- ### Delete an appointment confirmation
!["Delete an appointment"](https://github.com/NadiaPia/scheduler/blob/master/docs/deleting.png)

- ### Saving / Deleting messages
!["Saving"](https://github.com/NadiaPia/scheduler/blob/master/docs/saving-msg.png)
!["Deleting"](https://github.com/NadiaPia/scheduler/blob/master/docs/deleting-msg.png)

- ### Error message on save / delete attempt
!["Error message on save"](https://github.com/NadiaPia/scheduler/blob/master/docs/error-saving.png)
!["Error message on delete"](https://github.com/NadiaPia/scheduler/blob/master/docs/error-deleting.png)

## Dependencies

- Axios": "^0.27.2",
- Classnames": "^2.2.6",
- Normalize.css": "^8.0.1",
- React": "^16.9.0",
- React-dom": "^16.9.0",
- React-scripts": "3.0.0"
- React-hooks-testing-library": "0.6.0"

## Devdependencies
- @testing-library/react-hooks,
- react-test-renderer


## Getting Started
1. Fork and clone https://github.com/NadiaPia/scheduler-api in addition to this project
2. Install dependencies in both projects: `npm i`
3. Reset database in the scheduler-api folder: `npm run db:reset`
4. Run the server in the scheduler folder: `npm start`
5. Run the server in the scheduler-api folder: `npm start`
6. Visit `http://localhost:8000/`