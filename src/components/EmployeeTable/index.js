import React from "react";
import TableRow from "../TableRow";
import "./style.css";

function EmployeeTable({ results, sortTable }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>
                        Name
                            <button onClick={() => sortTable("name")}>
                            <i className="fas fa-sort"></i>
                            <i className="fas fa-sort-up"></i>
                            <i className="fas fa-sort-down"></i>
                        </button>
                    </th>
                    <th>Email</th>
                    <th>DOB</th>
                    <th>Age</th>
                    <th>Gender</th>
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
    )
}

export default EmployeeTable;