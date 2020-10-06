import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1>Employee Directory</h1>
      <p>
        Sort the order of employee name by clicking on the arrow, or use the
        search box to filter your results by Name, Phone Number, and Email.
      </p>
    </div>
  );
}

export default Header;
