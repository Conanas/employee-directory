import React from "react";
import TableRow from "../TableRow";
import "./style.css";

function EmployeeTable({ results }) {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          {results.map(({ age, dob, email, gender, id, name, picture }) => (
            <TableRow
              age={age}
              dob={dob}
              email={email}
              gender={gender}
              key={id}
              name={name}
              picture={picture}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeTable;