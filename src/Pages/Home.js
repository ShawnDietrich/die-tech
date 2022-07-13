import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Design from '../Pictures/Design.jpg'
import flexCode from '../Pictures/flexablecode.jpg'
import codeDevelopment from '../Pictures/CodeDevelopment.jpg'
import deployment from '../Pictures/deployment.jpg'
import Header from "./Components/Header";

const Home = () => {
    return (
        <>
            <Header />
            <div className="homeBackground">
                <div className="headerCell">
                    <h1>Providing Innovative Web Solutions For Modern Businesses</h1>
                </div>
                <Container className="container">

                    <Row data-aos='fade-up' className="serviceRow">
                        <Col className="colImg" md={4}>
                            <img className="servImg" src={Design} alt='' />
                        </Col>
                        <Col md={{ span: 6, offset: 1 }}>
                            <h2 className="serviceTitle">Collaborative Frontend Design</h2>
                            <p className="serviceDesc">I work directly with you to create a custom online space</p>
                        </Col>
                    </Row>

                    <Row data-aos='fade-up' className="serviceRow">
                        <Col md={{ span: 6, offset: 2 }} >
                            <h2 className="serviceTitle">Backend Programming</h2>
                            <p className="serviceDesc">Server side programming and / or database programming</p>

                        </Col>
                        <Col className="colImg" md={4} >
                            <img className="servImg" src={flexCode} alt='' />
                        </Col>
                    </Row>

                    <Row data-aos='fade-up' className="serviceRow">
                        <Col className="colImg" md={4}>
                            <img className="servImg" src={codeDevelopment} alt='' />
                        </Col>
                        <Col md={{ span: 6, offset: 1 }}>

                            <h2 className="serviceTitle">Custom Web Applications</h2>
                            <p className="serviceDesc">Applications designed for online use or software as a service (SAS)</p>
                        </Col>
                    </Row>

                    <Row data-aos='fade-up' className="serviceRow">
                        <Col md={{ span: 6, offset: 2 }}>
                            <h2 className="serviceTitle">Flexable Deployment Options</h2>
                            <p className="serviceDesc">Ability to deploy your site with any domain of your choosing</p>
                        </Col>
                        <Col className="colImg" md={4}>
                            <img className="servImg" src={deployment} alt='' />
                        </Col>

                    </Row>
                </Container>


            </div>

        </>
    )
}

export default Home