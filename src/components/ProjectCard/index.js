import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{props.name}</strong>
          </li>
          <li>
            <strong><a href={props.url}>{props.url}</a></strong>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
