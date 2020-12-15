import React, { Component } from "react";
import TableRow from "./TableRow";
import API from "../utils/API";

class EmployeeContainer extends Component {

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
            console.log(results)
            this.setState({ results: results })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <p>Employee Directory</p>
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>DOB</th>
                            <th>Age</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.results.map(({ id, name, email, dob, picture, gender }) => (
                            <TableRow
                                key={id.value}
                                name={name}
                                email={email}
                                dob={dob}
                                picture={picture}
                                gender={gender} />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default EmployeeContainer;