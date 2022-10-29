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
                Name: e.target[0].value,
                Email: e.target[1].value,
                Notes: e.target[2].value
            })
        }).then(() => {
            setShowMesg(true)
            document.getElementById('bookingForm').reset()
        })
    }

    return (
        <>
            <div className="bookHeader">
                
            </div>
            <div className="formBackground">
                <div className="bookForm">
                    <Alert key='info' variant="info" show={showMesg}>Your Message Has Been Sent</Alert>

                    <Form id="bookingForm" className="form" validated={validate} onSubmit={handleSubmit}>

                        <Row className='mb-3'>
                            <Form.Group as={Col} controlId='formGridFirstName'>
                                <Form.Label>Name</Form.Label>
                                <FormControl name="firstName" type='firstName' placeholder='Enter Name' required />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId='formGridEmail'>
                                <Form.Label>Email Address</Form.Label>
                                <FormControl name='email' type='email' placeholder="username@domain.com" required/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group className="mb-3" controlId="ControlTextarea">
                                <Form.Label>Tell Me About Your Web Service Needs:</Form.Label>
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