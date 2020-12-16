import React, { Component } from "react";
import TableRow from "../TableRow";
import "./style.css";
import API from "../../utils/API";

class EmployeeTable extends Component {

    state = {
        results: []
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        try {
            let users = await API.search();
            let { results } = users.data
            let tempResults = [];
            results.forEach(({ dob, email, gender, id, name, picture }) => {
                let date = new Date(dob.date)
                let newUser = {
                    age: dob.age,
                    dob: `${date.getDate()}/${date.getMonth() + 1}/${date.getYear()}`,
                    email: email,
                    gender: gender,
                    id: id.value,
                    name: `${name.first} ${name.last}`,
                    picture: picture.medium
                }
                tempResults.push(newUser)
            })
            this.setState({ results: tempResults })
        } catch (error) {
            console.log(error)
        }
    }

    sortTable = (event, column) => {
        // console.log(column)
        // console.log(event)

    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>
                            Name
                            <button onClick={event => this.sortTable(event, "name")}>
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
                    {this.state.results.map(({ age, dob, email, gender, id, name, picture }) => (
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
}

export default EmployeeTable;