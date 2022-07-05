import React from "react";
import { Row, Col, Container, Card, OverlayTrigger, Popover } from "react-bootstrap";

const Service = () => {

    const backendDetail = (
        <Popover id='popover-basic'>
            <Popover.Body>
                Using Node.js and popular frameworks like Express
                we can provide flexable and maintainable server side code
                that will easily interact with just about any database
            </Popover.Body>
        </Popover>
    )
    const databaseDetail = (
        <Popover id='popover-basic'>
            <Popover.Body>
                Design and build dynamic, and responsive databases
                using popular databse programs such as; SQL, PostgreSQL, and MySQL
            </Popover.Body>
        </Popover>
    )
    const authDetail = (
        <Popover id='popover-basic'>
            <Popover.Body>
                Making use of popular and secure frameworks we can
                provide secure password hashing and encryption services
            </Popover.Body>
        </Popover>
    )

    return (
        <div className="backgroundImg">

            <Container className="cardContainer" fluid>
                <Row className="cardRow">
                    <Col className="cardCol" md={{ span: 1, offset: 2 }}>
                        <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={backendDetail}>
                            <Card bg="success" key={'Success'} text="white" className="mb-2 cardService">
                                <Card.Body >
                                    <Card.Title className="cardTitle">Backend Programming</Card.Title>
                                    <Card.Text className="cardText">
                                        Full Server Code Design
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </OverlayTrigger>
                    </Col>

                    <Col className="cardCol" md={{ span: 1, offset: 2 }}>
                        <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={databaseDetail}>
                            <Card bg="success" key={'Success'} text="white" className="mb-2 cardService">
                                <Card.Body>
                                    <Card.Title className="cardTitle">Database Programming</Card.Title>
                                    <Card.Text className="cardText">
                                        Using SQL, PostgreSQL, MySQL
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </OverlayTrigger>
                    </Col>

                    <Col className="cardCol" md={{ span: 1, offset: 2 }}>
                        <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={authDetail}>
                            <Card bg="success" key={'Success'} text="white" className="mb-2 cardService">
                                <Card.Body>
                                    <Card.Title className="cardTitle">Server Authentication</Card.Title>
                                    <Card.Text className="cardText">
                                        Server side authentication
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </OverlayTrigger>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Service