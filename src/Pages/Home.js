import React from "react";
import { Card, Row, Col, Container, Image } from "react-bootstrap";
import Design from '../Pictures/Design.jpg'
import flexCode from '../Pictures/flexablecode.jpg'
import codeDevelopment from '../Pictures/CodeDevelopment.jpg'

const Home = () => {
    return (
        <>
            <Container>
                <Row className="serviceRow">
                    <div className="headerCell">
                        <h2>Providing Innovative Web Solutions For The Modern World</h2>
                    </div>
                </Row>

                <Row className="serviceRow">
                    <Col md={4}>
                        <Image src={Design} thumbnail />
                    </Col>
                    <Col className="justify-content-center" md={{ span: 6, offset: 1 }}>
                        <h2 className="serviceTitle">Colabertive Frontend Design</h2>
                        <p className="serviceDesc">I work directly with you to create a custom online space</p>
                    </Col>
                </Row>

                <Row className="serviceRow">
                    <Col md={4}>
                        <h2 className="serviceTitle">Innovative Code Structure</h2>
                        <p className="serviceDesc">Working with the latest code standards and codding languages</p>

                    </Col>
                    <Col className="justify-content-center" md={{ span: 6, offset: 1 }}>
                        <Image src={flexCode} thumbnail />
                    </Col>
                </Row>

                <Row className="serviceRow">
                    <Col md={4}>
                        <Image src={codeDevelopment} thumbnail />

                    </Col>
                    <Col className="justify-content-center" md={{ span: 6, offset: 1 }}>
                        
                        <h2 className="serviceTitle">Custom Web Applications</h2>
                        <p className="serviceDesc">Applications designed for online use or software as a service (SAS)</p>
                    </Col>
                </Row>

            </Container>

        </>
    )
}

export default Home