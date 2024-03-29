import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import awbs from "../Pictures/AWBS.png";
import Norfolk from "../Pictures/NorfolkFoot.png";
import MadeToOrder from "../Pictures/madetoorder.png";

const Portfolio = () => {
  return (
    <div className="portfolioBg">
      <Container style={{ padding: "5em 0em" }}>
        <Row data-aos="zoom-in-up">
          <Col>
            <Card className="bg-dark text-white">
              <Card.Img
                
                src={awbs}
                alt="https://ancientwisdombirth.ca/"
              />
              <Card.ImgOverlay>
                <Card.Title>
                  <a
                    href="https://ancientwisdombirth.ca/"
                    className="stretched-link link-light portfolioLink" 
                    target="_blank"
                    rel="noreferrer"
                  >
                    Static Website
                  </a>
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card className="bg-dark text-white">
              <Card.Img
                style={{ Opacity: "0.5" }}
                src={Norfolk}
                alt="https://nhfootcare.ca/"
              />
              <Card.ImgOverlay>
                <Card.Title>
                  <a
                    href="https://nhfootcare.ca/"
                    className="stretched-link link-light portfolioLink"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Small Business
                  </a>
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
        <br/>
        <Row data-aos="zoom-in-up">
          <Col>
            <Card className="bg-dark text-white">
              <Card.Img
                style={{ Opacity: "0.5" }}
                src={MadeToOrder}
                alt="https:/ecommerce.made-to-order.ca/"
              />
              <Card.ImgOverlay>
                <Card.Title>
                  <a
                    href="https://ecommerce.made-to-order.ca/"
                    className="stretched-link link-light portfolioLink"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Custom E-Commerce Example
                  </a>
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
