import React from "react";

function DataTable(props) {
  //Table to display employee information
  return (
    <tbody>
      {props.results.map((emp) => (
        <tr>
          <td>
            <img src={emp.picture} id="empImg" alt="employee image" />
          </td>
          <td>
            {emp.name.first} {emp.name.last}
          </td>
          <td>
            <p>Mobile: {emp.cell}</p>
          </td>
          <td>
            <p>Email: {emp.email}</p>
          </td>
          <td>
            {emp.dob}
          </td>
          <td>
            {emp.registered}
          </td>
        </tr>
      ))}
    </tbody>
  );
}
