import React from "react";
import { Row, Col, Container, Card, OverlayTrigger, Popover } from "react-bootstrap";

const Service = () => {


    function cardBuilder(index, bgKey, title, text, overlayText) {
        return (

            <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} popperConfig={{ modifiers: [{ name: 'arrow', options: { padding: 126 } }] }}
                overlay={
                    <Popover id='popover-basic'>
                        <Popover.Body>
                            {overlayText}
                        </Popover.Body>
                    </Popover>
                }>
                <Card bg={bgKey.toLowerCase()} key={{ bgKey }} text="white" className="mb-2 cardService">
                    <Card.Body >
                        <Card.Title className="cardTitle">{title}</Card.Title>
                        <Card.Text className="cardText">{text}</Card.Text>
                    </Card.Body>
                </Card>
            </OverlayTrigger>
        )
    }

    return (
        <div className="backgroundImg">

            <Container >
                <div className="containerRow">
                    <Row className="justify-content-md-center">
                        <Col md='auto'>
                            {cardBuilder(
                                1,
                                'Secondary',
                                'Backend Programming',
                                'RESTful Server Code Design',
                                "Using Node.js and popular frameworks like Express we can provide flexable and maintainable server side code that will easily interact with just about any database"
                            )}
                        </Col>
                        <Col md='auto'>
                            {cardBuilder(
                                1,
                                'Secondary',
                                'Database Programming',
                                'Dynamic / Effcient Database Design',
                                "Design and build dynamic, and responsive databases using popular databse programs such as; SQL, PostgreSQL, and MySQL"
                            )}
                        </Col>
                        <Col md='auto'>
                            {cardBuilder(
                                1,
                                'Secondary',
                                'Backend Securty',
                                'E-Commerce, or Frontend Login',
                                "Making use of popular and secure frameworks we can provide secure password hashing and encryption services for e-commerce sites or login accounts"
                            )}
                        </Col>
                    </Row>

                </div>

                <div className="containerRow">
                    <Row className="justify-content-md-center">
                        <Col md='auto'>
                            {cardBuilder(
                                1,
                                'Success',
                                'FrontEnd Programming',
                                'Using Popular Frameworks',
                                "With the use of the stable framework React with Bootstrap we can develop responsive attractive webpages for your business"
                            )}
                        </Col>
                        <Col md='auto'>
                            {cardBuilder(
                                1,
                                'Success',
                                'Single Page Applications',
                                'Design and Deploy SPA Sites',
                                "With our backend knowldege we can devleop dynamic web pages that will be driven from the backend server, instead of the browser having to do all the heavy lifting"
                            )}
                        </Col>
                        <Col md='auto'>
                            {cardBuilder(
                                1,
                                'Success',
                                'Frontend Only Sites',
                                'Modern API Call Functions',
                                "We can develop websites that only use frontend programming, making use of existing API (application programming interface) functions.  This includes email form data, or payment functions"
                            )}
                        </Col>
                    </Row>
                </div>
                <div className="containerRow">
                    <Row className="justify-content-md-center">
                        <Col md='auto'>
                            {cardBuilder(
                                1,
                                'Info',
                                'FrontEnd Programming',
                                'Using Popular Frameworks',
                                "With the use of the stable framework React with Bootstrap we can develop responsive attractive webpages for your business"
                            )}
                        </Col>
                        <Col md='auto'>
                            {cardBuilder(
                                1,
                                'Info',
                                'Single Page Applications',
                                'Design and Deploy SPA Sites',
                                "With our backend knowldege we can devleop dynamic web pages that will be driven from the backend server, instead of the browser having to do all the heavy lifting"
                            )}
                        </Col>
                        <Col md='auto'>
                            {cardBuilder(
                                1,
                                'Info',
                                'Frontend Only Sites',
                                'Modern API Call Functions',
                                "We can develop websites that only use frontend programming, making use of existing API (application programming interface) functions.  This includes email form data, or payment functions"
                            )}
                        </Col>
                    </Row>
                </div>

            </Container>
        </div>
    )
}

export default Service