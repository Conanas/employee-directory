import React, { Component } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SortOption from "./components/SortOption"
import FilterOption from "./components/FilterOption"
import EmployeeTable from "./components/EmployeeTable"
import API from "./utils/API"
import "./App.css"

class App extends Component {

  state = {
    results: [],
    filter: "",
    filteredResults: [],
    connectionError: false
  }

  componentDidMount = () => {
    this.getUsers();
  }

  getUsers = async () => {
    try {
      let users = []
      users = await API.search();
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
      this.setState(prevState => prevState.filteredResults = tempResults)
    } catch (error) {
      this.getUsers()
    }
  }

  sortTable = (event) => {
    event.preventDefault()
    let { target } = event
    let { name, asc } = target
    let lessThan = asc.checked ? -1 : 1
    let greaterThan = asc.checked ? 1 : -1
    this.setState(prevState => prevState.filteredResults.sort((a, b) => {
      let itemA = name.checked ? a.name.toLowerCase() : a.age
      let itemB = name.checked ? b.name.toLowerCase() : b.age
      return (
        itemA < itemB ? lessThan :
          itemA > itemB ? greaterThan :
            0
      )
    }))
  }

  filterTable = (event) => {
    let { value } = event.target
    this.setState(prevState => prevState.filter = value)
    let filteredResults = this.state.results.filter(user => user.name.toLowerCase().includes(value.toLowerCase()))
    this.setState(prevState => prevState.filteredResults = filteredResults)
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <FilterOption
                  filter={this.state.filter}
                  filterTable={this.filterTable}
                />
              </div>
              <div className="col-sm-8 d-flex justify-content-sm-end">
                <SortOption
                  sortTable={this.sortTable}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <EmployeeTable
                  results={this.state.filteredResults}
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
