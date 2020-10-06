import React from "react";

function DataTableHeader(props) {
  return (
    <thead className>
      <tr>
        <th scope="col">Image</th>
        <th scope="col" data-sortable="true">
          <span id="name" onClick={props.alphaSort}>
            Name {props.sortIcon}
          </span>
        </th>
        <th scope="col">Mobile</th>
        <th scope="col">Email</th>
        <th scope="col">Date of Birth</th>
        <th scope="col">Hire Date</th>
      </tr>
    </thead>
  );
}

export default DataTableHeader;
