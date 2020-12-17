import React, { Component } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SortOption from "./components/SortOption"
import EmployeeTable from "./components/EmployeeTable"
import API from "./utils/API"

class App extends Component {

	state = {
		results: [],
	}

	componentDidMount = () => {
		this.getUsers();
	}

	getUsers = async () => {
		try {
			let users = []
			while (users.length === 0) {
				users = await API.search();
			}
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
			this.setState(prevState => prevState.results = tempResults)
		} catch (error) {
			console.log(error)
		}
	}

	sortTable = (event) => {
		event.preventDefault()
		let { target } = event
		let { name, asc } = target
		let tempResults = this.state.results
		let lessThan = 1
		let greaterThan = -1
		if (asc.checked) {
			lessThan = -1
			greaterThan = 1
		}
		tempResults.sort((a, b) => {
			let itemA = a.age
			let itemB = b.age
			if (name.checked) {
				itemA = a.name.toLowerCase()
				itemB = b.name.toLowerCase()
			}
			return (
				itemA < itemB ? lessThan :
					itemA > itemB ? greaterThan :
						0
			)

		})
		this.setState(prevState => prevState.results = tempResults)
	}

	render() {
		return (
			<>
				<Header />
				<main>
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<SortOption
									sortTable={this.sortTable}
								/>
								<EmployeeTable
									results={this.state.results}
								// sortTable={this.sortTable}
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
