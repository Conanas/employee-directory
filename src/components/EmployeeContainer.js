import React, { Component } from "react";
import API from "../utils/API"

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
                <p>Employee Container</p>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>email</th>
                        <th>dob</th>
                        <th>picture</th>
                    </tr>
                    {this.state.results.map(({ name, email, dob, picture }) => (
                        <tr>
                            <td>
                                {name.title} {name.first} {name.last}
                            </td>
                            <td>
                                {email}
                            </td>
                            <td>
                                {dob.date} {dob.age}
                            </td>
                            <td>
                                {picture.medium}
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        )
    }
}

export default EmployeeContainer;