import React, { Component } from "react";
import API from "../../utils/API";
import Header from "../Header/Header";
import Container from "../Container/Container";
import Row from "../Row/Row";
import Col from "../Column/Column";
import SearchForm from "../SearchForm/SearchForm";
import DataTableHeader from "../DataTableHeader/DataTableHeader";

import DataTable from "../DataTable/DataTable";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
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
        console.log(this.state.results);
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
        emp.name.last.includes(query)
    );
    //set this.state.results to filtered array
    this.setState.results({
      filterResults: filtered,
    });
    // console.log(this.state.filterResults);
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
              <DataTableHeader />
              {this.state.results ? (

                <DataTable 
                results={this.state.results.filter((emp) => 

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
