import React, { Component } from "react";
import API from "../../utils/API";
import Header from "../Header/Header";
import Container from "../Container/Container";
import SearchForm from "../SearchForm/SearchForm";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
    filterResults: [],
  };

  // When this component mounts, search for all employees
  componentDidMount() {
    this.findEmployees();
  }

  findEmployees = () => {
    API.getUsers()
      .then((res) => {
        this.setState({
          results: res.data.results,
        });
        console.log(res)
      })
      .catch((err) => console.log(err));
  };
  //query returns all employees who may match search based on values of the various info below
  filterEmployees = (query) => {
    const filtered = this.state.results.filter(
      (emp) =>
        emp.cell.includes(query) ||
        emp.email.includes(query) ||
        emp.name.first.includes(query) ||
        emp.name.last.includes(query) ||
        emp.phone.includes(query)
    );
    //set this.state.results to filtered array
    this.state.results({
      filterResults: filtered,
    });
    console.log(this.state.filterResults);
  };

  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = (e) => {
    e.preventDefault();
    this.findEmployees(this.state.search);
  };

  render() {
    return (
      <Container>
        <Header />
        <SearchForm />
        
        
      </Container>
    );
  }
}

export default SearchResultContainer;
