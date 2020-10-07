import React, { Component } from "react";
import { Col, Row, Card } from "react-bootstrap";
import GitHubIcon from "@material-ui/icons/GitHub";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class Portfolio extends Component {
  render() {
    return (
      <div className="container">
        <Row className="p-3">
          <Col>
            <h1>
              <b>PORTFOLIOS</b>
            </h1>
          </Col>
        </Row>
        <Row className="p-3" xs={1} md={3}>
          <Col>
            <Card
              bg="dark"
              key="1"
              text={"dark" === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2 card h-100"
            >
              <Card.Header>Project Name</Card.Header>
              <Card.Body>
                <Card.Title>Blog website </Card.Title>
                <Card.Text>
                  This project is about Blog post. Anyone can read a blog from
                  this site. Only admin have access to handle a blog.
                </Card.Text>
                <Card.Text>
                  <span>
                    <b>Technologies</b>
                    <br />
                    NodeJs, MongoDB, Bootstrap, JavaScript
                  </span>
                  <br />
                  <br />
                  <div className="align-bottom">
                    <a
                      className="float-right text-danger"
                      href="https://github.com/HafsaR/nodejsBlogsite"
                      target="_blank"
                    >
                      <GitHubIcon />
                    </a>
                    <a
                      className="text-white"
                      href="https://nodejs-blogsite.herokuapp.com/"
                      target="_blank"
                    >
                      Visit Website<ArrowForwardIosIcon/>
                      <b style={{ textAlign: "center" }}>BlogSite</b>
                    </a>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card
              bg="dark"
              key="1"
              text={"dark" === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2 card h-100"
            >
              <Card.Header>Project Name</Card.Header>
              <Card.Body>
                <Card.Title>Opportunity Traker </Card.Title>
                <Card.Text>
                  A project to track user’s job opportunities. It helps you to
                  stay organized, prepare for interviews.
                </Card.Text>
                <Card.Text>
                  <span>
                    <b>Technologies</b>
                    <br />
                    ASP.net, C#, Bootstrap, MVC, PostgreSQL, Entity framework
                  </span>
                  <br />
                  <br />
                  <div className="align-bottom">
                    <a
                      className="float-right text-danger"
                      href="https://github.com/HafsaR/Opportunity-Tracker"
                      target="_blank"
                    >
                      <GitHubIcon />
                    </a>

                    <a
                      className="text-white"
                      href="https://trackopportunity.azurewebsites.net/Identity/Account/Register"
                      target="_blank"
                    >
                        Visit Website<ArrowForwardIosIcon/>

                      <b style={{ textAlign: "center" }}>Opportunity Tracker</b>
                    </a>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card
              bg="dark"
              key="1"
              text={"dark" === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2 card h-100"
            >
              <Card.Header>Project Name</Card.Header>
              <Card.Body>
                <Card.Title>Feedback Collection</Card.Title>
                <Card.Text>
                  This project is about Blog post. Anyone can read a blog from
                  this site. Only admin have access to handle a blog.
                </Card.Text>
                <Card.Text>
                  <span>
                    <b>Technologies</b>
                    <br />
                    NodeJs, MongoDB, Bootstrap, JavaScript
                  </span>
                  <br />
                  <br />
                  <a
                      className="float-right text-danger"
                      href="https://github.com/HafsaR/feedbackCollectionApp"
                      target="_blank"
                    >
                      <GitHubIcon />
                    </a>
                  <a
                    className="text-white"
                    href="https://whispering-basin-56465.herokuapp.com/"
                    target="_blank"
                  >
                       Visit Website<ArrowForwardIosIcon/>

                    <b style={{ textAlign: "center" }}>
                      Feedback Collection App
                    </b>
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>






         
        </Row>
        <Row className="p-3" xs={1} md={3}>
          <Col>
            <Card
              bg="dark"
              key="1"
              text={"dark" === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2 card h-100"
            >
              <Card.Header>Project Name</Card.Header>
              <Card.Body>
                <Card.Title>Product Taxonomy API </Card.Title>
                <Card.Text>
                  A project to parse Google Product-taxonomy data and display it
                  in tree form
                </Card.Text>
                <Card.Text>
                  <span>
                    <b>Technologies</b>
                    <br />
                    TypeScript
                  </span>
                  <br />
                  <br />
                  <a
                      className="float-right text-danger"
                      href="https://github.com/HafsaR/product-taxonomy-api"
                      target="_blank"
                    >
                      <GitHubIcon />
                    </a>
                  <a
                    className="text-white"
                    href="https://product-taxonomy-api.herokuapp.com/"
                    target="_blank"
                  >
                      Visit Website<ArrowForwardIosIcon/>
                    <b style={{ textAlign: "center" }}>Product Taxonomy API</b>
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>{" "}
          <Col>
            <Card
              bg="dark"
              key="1"
              text={"dark" === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2 card h-100"
            >
              <Card.Header>Project Name</Card.Header>
              <Card.Body>
                <Card.Title>Barkat-e-khwaja</Card.Title>
                <Card.Text>
                  An android application to download magazines.
                </Card.Text>
                <Card.Text>
                  <span>
                    <b>Technologies</b>
                    <br />
                    Android studio, Java, API, XML
                  </span>
                  <br />
                  <br />
                  <a
                      className="float-right text-danger"
                      href="https://github.com/HafsaR/android-download-magazines"
                      target="_blank"
                    >
                      <GitHubIcon />
                    </a>
                  <a
                    className="text-white"
                    href="https://github.com/HafsaR/android-download-magazines"
                    target="_blank"
                  >
                      Visit Website<ArrowForwardIosIcon/>
                    <b style={{ textAlign: "center" }}>Barkat-e-khwaja</b>
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>{" "}

          <Col>
            <Card
              bg="dark"
              key="1"
              text={"dark" === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2 card h-100"

            >
              <Card.Header>Project Name</Card.Header>
              <Card.Body>
                <Card.Title>Toolshed Catelog Manager </Card.Title>
                <Card.Text>
                  A project to parse json files, store them in MongoDB, and view
                  them using express.
                </Card.Text>
                <Card.Text>
                  <span>
                    <b>Technologies</b>
                    <br />
                    NodeJS, MongoDB, JavaScript
                  </span>
                  <br />
                  <br />
                  <a
                    className="float-right text-danger"
                    href="https://github.com/HafsaR/catelog-manager"
                    target="_blank"
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    className="text-white"
                    href="https://github.com/HafsaR/catelog-manager  "
                    target="_blank"
                  >
                      Visit Website<ArrowForwardIosIcon/>
                    <b style={{ textAlign: "center" }}>
                      Toolshed Catelog Manager
                    </b>
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
         
        </Row>
      </div>
    );
  }
}

export default Portfolio;
