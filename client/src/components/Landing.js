import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <div
              className="container align-self-center"
              style={{ textAlign: "center" }}
            >
              <h1>
                Hi, I am{" "}
                <span style={{ color: "#007bff" }}>Hafsa Degmaster</span>
              </h1>
              <h1>I am a developer. I make website more interactive</h1>
            </div>
          </Col>
        </Row>
        <Row >
          <Col>
          <div className="align-self-center p-3" style={{textAlign:"center"}}>
          <a className="text-danger p-3" href="https://github.com/HafsaR" target="_blank" > <GitHubIcon /></a>
          <a className="text-danger" href="https://www.linkedin.com/in/hafsa-degmaster-72a079116/" target="_blank"><LinkedInIcon/></a>
          </div>
          
          </Col>
        </Row>
      </div>
    );
  }
}

export default Landing;
