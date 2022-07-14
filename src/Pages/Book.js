import React, { useState } from "react";
import { Form, Row, Col, FormControl, Button, Alert } from 'react-bootstrap'

const Book = () => {
    const [validate, setVaidate] = useState(false)
    const [showMesg, setShowMesg] = useState(false)
    const formID = process.env.REACT_APP_FORMID

    function handleSubmit(e) {
        e.preventDefault()
        setVaidate(true)
        fetch(`https://submit-form.com/${formID}`, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                Date: e.target[0].value,
                Time: e.target[1].value,
                FirstName: e.target[2].value,
                LastName: e.target[3].value,
                Notes: e.target[4].value
            })
        }).then(() => {
            setShowMesg(true)
            document.getElementById('bookingForm').reset()
        })
    }

    return (
        <>
            <div className="bookHeader">
                <h1>Fill Out The Form Below For A Free Consultation</h1>
            </div>
            <div className="formBackground">
                <div className="bookForm">
                    <Alert key='info' variant="info" show={showMesg}>Your Message Has Been Sent</Alert>

                    <Form id="bookingForm" className="form" validated={validate} onSubmit={handleSubmit}>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId='formGridDate'>
                                <Form.Label>Requested Date Of Consultation</Form.Label>
                                <FormControl name="date" type="date" required />
                            </Form.Group>
                            <Form.Group as={Col} className="mp-3">
                                <Form.Label>Requested Time Of Day</Form.Label>
                                <FormControl name="time" type="time" required />
                            </Form.Group>
                        </Row>

                        <Row className='mb-3'>
                            <Form.Group as={Col} controlId='formGridFirstName'>
                                <Form.Label>First Name</Form.Label>
                                <FormControl name="firstName" type='firstName' placeholder='Enter Name' required />
                            </Form.Group>

                            <Form.Group as={Col} controlId='formGridLastName'>
                                <Form.Label>Last Name</Form.Label>
                                <FormControl name="lastName" type='lastName' placeholder='Enter Last Name' required />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group className="mb-3" controlId="ControlTextarea">
                                <Form.Label>Notes:</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Row>

                        <Button className="btnForm" variant='outline-dark' type='submit'>Submit</Button>
                        <Button className="btnForm" variant="warning" type="reset">Clear Form</Button>
                    </Form>

                </div>
            </div>


        </>

    )
}

export default Book