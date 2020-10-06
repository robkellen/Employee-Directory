import React from "react";
import "./SearchForm.css"

function SearchForm(props) {
  return (
    <form>
      <div className="form-inline">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search Employees..."
          id="search"
        />
        <button
          onClick={props.handleFormSubmit}
          className="btn btn-outline-primary my-2 my-sm-0"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
