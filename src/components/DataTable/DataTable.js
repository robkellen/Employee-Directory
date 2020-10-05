import React from "react";
import Moment from "react-moment";

function DataTable(props) {
  //Table to display employee information
  return (
    <tbody>
      {props.results.map((emp) => (
        <tr key={emp.id.value}>
          <td>
            <img src={emp.picture.medium} id="empImg" alt="employeeImage" />
          </td>
          <td>
            {emp.name.first} {emp.name.last}
          </td>
          <td>
            <p>{emp.cell}</p>
          </td>
          <td>
            <p>{emp.email}</p>
          </td>
          <td>
            <Moment format="MMMM DD, YYYY">{emp.dob.date}</Moment>
          </td>
          <td>
            <Moment format="MMMM DD, YYYY">{emp.registered.date}</Moment>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default DataTable;
