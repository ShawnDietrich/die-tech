import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Design from "../Pictures/Design.jpg";
import flexCode from "../Pictures/flexablecode.jpg";
import codeDevelopment from "../Pictures/CodeDevelopment.jpg";
import deployment from "../Pictures/deployment.jpg";
import Header from "./Components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="homeBackground">
        <div className="headerCell">
          <h2>Providing Innovative Websites For Modern Businesses</h2>
        </div>
        <Container className="container">
          <Row data-aos="fade-up" className="serviceRow">
            <Col className="colImg" md={4}>
              <img
                title="Design Example"
                className="servImg"
                src={Design}
                alt="Designing Website"
                loading="lazy"
              />
            </Col>
            <Col md={{ span: 6, offset: 1 }}>
              <h2 className="serviceTitle">Collaborative Frontend Design</h2>
              <p className="serviceDesc">
                Whether you want a simple single page website or a full blown
                e-commerce website you are involved during the design process
                from begining to end{" "}
              </p>
            </Col>
          </Row>

          <Row data-aos="fade-up" className="serviceRow">
            <Col md={{ span: 6, offset: 2 }}>
              <h2 className="serviceTitle">Backend Programming</h2>
              <p className="serviceDesc">
                We provide full-scale server side programming and or database
                programming for your website or web application
              </p>
            </Col>
            <Col className="colImg" md={4}>
              <img
                title="Coding Image"
                className="servImg"
                src={flexCode}
                alt="Coding The Website"
                loading="lazy"
              />
            </Col>
          </Row>

          <Row data-aos="fade-up" className="serviceRow">
            <Col className="colImg" md={4}>
              <img
                title="Services Offered"
                className="servImg"
                src={codeDevelopment}
                alt="Ofering Website Services"
                loading="lazy"
              />
            </Col>
            <Col md={{ span: 6, offset: 1 }}>
              <h2 className="serviceTitle">Custom Web Applications</h2>
              <p className="serviceDesc">
                With web applications becoming a popular solution, we can take
                exisiting desktop applications and move it to a web based
                appliction so that your users can have acces to updated software
                24/7
              </p>
            </Col>
          </Row>

          <Row data-aos="fade-up" className="serviceRow">
            <Col md={{ span: 6, offset: 2 }}>
              <h2 className="serviceTitle">Small Business Static Website</h2>
              <p className="serviceDesc">
                For the small business owner that wants to get their name out
                into the world we offer competive packages that will provide you
                with a digital space you can be proud of
              </p>
            </Col>
            <Col className="colImg" md={4}>
              <img
                title="Small Business Oferings"
                className="servImg"
                src={deployment}
                alt="Small Business"
                loading="lazy"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
