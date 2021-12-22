import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function Formal() {
    

    return (
        <div>
            <Form className="the-form">
                <Row className="mt-3">
                    <Col>
                        <Form.Control placeholder="First name"/>
                    </Col>
                    <Col>
                        <Form.Control placeholder="Last name"/>
                    </Col>
                    </Row>
                    <Row className="mt-3">
                    <Col>
                        <Form.Control placeholder="Telephone"/>
                    </Col>
                    <Col>
                        <Form.Control placeholder="AMKA"/>
                    </Col>
                    </Row>
                    <Row>
                </Row>
            </Form> 
        </div>
    )
}

export default Formal
