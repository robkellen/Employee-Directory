import React, { Component } from "react";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
    filterResults: []
  };

  // When this component mounts, search for all employees
  componentDidMount() {
    this.findEmployees();
  }

  findEmployees = () => {
    API.getUsers()
    .then((res) => {
      console.log(res)
    })
      // .then(res => this.setState({ result: res.data }))
      // .catch(err => console.log(err));
  };

  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = e => {
    e.preventDefault();
    this.findEmployees(this.state.search);
  };

  render() {
    return (
      <>
      </>


      // <Container>
      //   <Row>
      //     <Col size="md-8">
      //       <Card
      //         heading={this.state.result.Title || "Search for a Movie to Begin"}
      //       >
      //         {this.state.result.Title ? (
      //           <MovieDetail
      //             title={this.state.result.Title}
      //             src={this.state.result.Poster}
      //             director={this.state.result.Director}
      //             genre={this.state.result.Genre}
      //             released={this.state.result.Released}
      //           />
      //         ) : (
      //           <h3>No Results to Display</h3>
      //         )}
      //       </Card>
      //     </Col>
      //     <Col size="md-4">
      //       <Card heading="Search">
      //         <SearchForm
      //           value={this.state.search}
      //           handleInputChange={this.handleInputChange}
      //           handleFormSubmit={this.handleFormSubmit}
      //         />
      //       </Card>
      //     </Col>
      //   </Row>
      // </Container>
    );
  }
}

export default SearchResultContainer;
