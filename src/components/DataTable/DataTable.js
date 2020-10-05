import React from "react";

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
          <td>{emp.dob.date}</td>
          <td>{emp.registered.date}</td>
        </tr>
      ))}
      
    </tbody>
  );
}

export default DataTable;
