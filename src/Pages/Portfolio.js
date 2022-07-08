import React, { useState, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import awbs from '../Pictures/AWBS.png'
import Norfolk from '../Pictures/NorfolkFoot.png'
import MadeToOrder from '../Pictures/madetoorder.png'

const Portfolio = () => {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
            <div classname='portfolioBg'>
                <Container style={{padding: '5em 0em'}}>
                    <Row>
                        <Col>
                            <Card className="bg-dark text-white">
                                <Card.Img style={{ Opacity: '0.5' }} src={awbs} alt='https://ancientwisdombirth.ca/' />
                                <Card.ImgOverlay>
                                    <Card.Title>Ancient Wisdom Birth</Card.Title>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="bg-dark text-white">
                                <Card.Img style={{ Opacity: '0.5' }} src={Norfolk} alt='https://ancientwisdombirth.ca/' />
                                <Card.ImgOverlay>
                                    <Card.Title>Ancient Wisdom Birth</Card.Title>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <Card className="bg-dark text-white">
                                <Card.Img style={{ Opacity: '0.5' }} src={MadeToOrder} alt='https://made-to-order.herokuapp.com/' />
                                <Card.ImgOverlay>
                                    <Card.Title>Made To Order - E-Commerce Site</Card.Title>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
    );
}

export default Portfolio