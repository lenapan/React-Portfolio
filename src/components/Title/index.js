import React from "react";
import "./style.css";
import {Link} from "react-router-dom";

function Title(props) {
  return (
  <div className="title">
    <h3>{props.children}</h3>
    <h4>React Portfolio 1.0</h4>
    <h5><Link to="About">More Info</Link></h5>
  </div>
  );
}
export default Title;
