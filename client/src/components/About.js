import React, { Component } from "react";
import { Button, Col, Row, Card, CardDeck, Image,FigureImage,Figure } from "react-bootstrap";
import CodeIcon from "@material-ui/icons/Code";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";

class About extends Component {
  render() {
    return (
      <div className="container">
        <Row className="p-3">
          <Col>
            <h1>
              <b>ABOUT ME</b>
            </h1>
          </Col>
        </Row>
        <Row className="p-3" xs={1} md={2}>
          <Col>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="/image/hafsa.jpg"
              />
              <Figure.Caption>
               Hafsabanu Degmaster
              </Figure.Caption>
            </Figure>
          </Col>
          <Col>
            <h1>
              I am <span style={{ color: "green" }}>Hafsa Degmaster</span>
            </h1>
            <p>
              I am a web developer. I can provide clean code and pixel perfect
              design. I also make website more & more interactive with web
              animations.
            </p>

            <dl className="row">
              <dt className="col-sm-3">Full Name: </dt>
              <dd className="col-sm-9">Hafsabanu Degmaster</dd>

              <dt className="col-sm-3">Languages: </dt>
              <dd className="col-sm-9">English, Hindi, Gujarati</dd>

              <dt className="col-sm-3">Address: </dt>
              <dd className="col-sm-9">
                3525 Avonhurst Dr, Regina, SK, Canada
              </dd>

              <dt className="col-sm-3">Freelancer: </dt>
              <dd className="col-sm-9">Available</dd>
            </dl>
            <a
              href="https://drive.google.com/file/d/1YGKwVRIvk-0grKw7oH-5-x6IABUorh5c/view"
              target="_blank"
              className="btn btn-primary"
            >
              Download CV
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="p-3">
              <b>SERVICES</b>
            </h1>
          </Col>
        </Row>
        <Row xs={1} md={3}>
          <Col>
            <Card
              bg="dark"
              key="1"
              text={"dark" === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>
                <CodeIcon />
              </Card.Header>
              <Card.Body>
                <Card.Title> Web Development </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
              className="mb-2"
            >
              <Card.Header>
                <ColorLensIcon />
              </Card.Header>
              <Card.Body>
                <Card.Title> Web Design </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
              className="mb-2"
            >
              <Card.Header>
                <DeveloperModeIcon />
              </Card.Header>
              <Card.Body>
                <Card.Title> Full-stack Developer </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
