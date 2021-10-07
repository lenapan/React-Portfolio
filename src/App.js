import React, { Component } from "react";
import { Routes, Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ProjectCard from "./components/ProjectCard";
import projects from "./projects.json";
import About from "./components/About";

class App extends Component {
  // projects.json
    pro = {
      projects
    };
 
  render(){   
    return (
      <Wrapper>
        <Router>
          <Title>Coding with Lena</Title>
          <Route exact path="/about" component={About} />
        </Router> 
        {this.pro.projects.map(f => (
          <ProjectCard
            id={f.id} // including additional json details
            key={f.id} //great for differentiating duplicate values
            name={f.name}
            image={f.image}
            more = {f.more}
            url={f.url}
            />
        ))}
      </Wrapper>
    );
  }
}
export default App;
