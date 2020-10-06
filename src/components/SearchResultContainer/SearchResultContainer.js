import React, { Component } from "react";
import API from "../../utils/API";
import Header from "../Header/Header";
import Container from "../Container/Container";
import Row from "../Row/Row";
import Col from "../Column/Column";
import SearchForm from "../SearchForm/SearchForm";

import DataTable from "../DataTable/DataTable";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
    sortResult: [],
    alphabetized: true,
    sortIcon: "",
  };

  // When this component mounts, search for all employees
  componentDidMount() {
    this.findEmployees();
  }
  //API call to get employees
  findEmployees = () => {
    API.getUsers()
      .then((res) => {
        this.setState({
          results: res.data.results,
        });
        // console.log(this.state.results);
      })
      .catch((err) => console.log(err));
  };
  //when text is entered in input grab the value
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

  alphaSort = () => {
    let sortedEmps = [];
    if (this.state.alphabetized) {
      this.setState({ sortIcon: "↓" });
      sortedEmps = this.state.results.sort((a, z) => {
        let aName = a.name.first.toLowerCase();
        let zName = z.name.first.toLowerCase();
        if (aName < zName) return -1;
        if (aName > zName) return 1;
        return 0;
      });
    } else {
      this.setState({ sortIcon: "↑" });
      sortedEmps = this.state.results.sort((a, z) => {
        let aName = a.name.first.toLowerCase();
        let zName = z.name.first.toLowerCase();
        if (aName > zName) return -1;
        if (aName < zName) return 1;
        return 0;
      });
    }
    this.setState({
      alphebetized: !this.state.alphabetized,
      sortResults: sortedEmps,
    });
  };

  render() {
    // console.log(this.state)
    return (
      <Container>
        <Header />
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Row>
          <Col size="md">
            <table className="table table-bordered table-striped">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col" >
                    <span id="name" onClick={this.alphaSort}>
                      Name {this.state.sortIcon}
                    </span>
                  </th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Email</th>
                  <th scope="col">Date of Birth</th>
                  <th scope="col">Hire Date</th>
                </tr>
              </thead>
              {this.state.results ? (
                <DataTable
                  results={this.state.results.filter(
                    (emp) =>
                      emp.cell.includes(this.state.search) ||
                      emp.email.includes(this.state.search) ||
                      emp.name.first.includes(this.state.search) ||
                      emp.name.last.includes(this.state.search) ||
                      emp.phone.includes(this.state.search)
                  )}
                />
              ) : (
                <h2>404 Not Found!</h2>
              )}
            </table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchResultContainer;
