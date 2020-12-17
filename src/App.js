import React, { Component } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SortOption from "./components/SortOption"
import EmployeeTable from "./components/EmployeeTable"
import API from "./utils/API"

class App extends Component {

	state = {
		results: []
	}

	componentDidMount = () => {
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

	// sortTable = (column) => {
	// 	console.log(column)
	// 	console.log(this.state.results)
	// 	this.state.results.sort((a, b) => {
	// 		let varA = a.
	// 	})
	// }

	render() {
		return (
			<>
				<Header />
				<main>
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<SortOption />
								<EmployeeTable
									results={this.state.results}
									sortTable={this.sortTable}
								/>
							</div>
						</div>
					</div>
				</main>
				<Footer />
			</>
		);
	}

}

export default App;
