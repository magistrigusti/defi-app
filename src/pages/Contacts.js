import React from 'react';
import { motion } from 'framer-motion';
import { 
        Row, Col, Form, FormGroup, FormLabel, FormControl, 
        Button, ListGroup, ListGroupItem 
        } from 'react-bootstrap';

const Contacts = () => {
  const handleSubmit = (event) => {};

  return (
    <motion.div className="contact"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
    >
      <h2>Contacts</h2>

      <Row>
        <Col>
          <div className="contact-form">
            <Form onSubmit={handleSubmit}>
              <FormGroup className="mb-3" controlId="validationCustom01">
                <FormLabel>Name</FormLabel>
                <FormControl required type="text" placeholder="Name" />
              </FormGroup>

              <FormGroup className="mb-3" controlId="validationCustom02">
                <FormLabel>Email</FormLabel>
                <FormControl required type='email' placeholder="Email" />
              </FormGroup>

              <FormGroup className="mb-3" controlId="validationCustom03">
                <FormLabel>Message</FormLabel>
                <FormControl required as="textarea" placeholder="Message" />
              </FormGroup>

              <Button type="submit">Submit Form</Button>
            </Form>
          </div>
        </Col>

        <Col>
          <div className="contact-data">
              <p>
              If you want to chat about a project — email me on
              mugistrigusti@gmail.com.
            </p>
            <p>
              I can help designing a website, designing a new product, improving
              an existing part of your product, building a strong design system,
              building websites in Webflow, or designing a custom icon set for
              your business.{" "}
            </p>
            <p>
              Currently based in Holon, Izrail — available for remote-friendly
              work from December 2023.
            </p>

            <p>
              <ListGroup horizontal>
                <ListGroupItem>
                  <a href="https://github.com/magistrigusti/Ton-So-Net/tree/master">GitHub</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="!#">LinkedIn</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="!#">Instagram</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="!#">Facebook</a>
                </ListGroupItem>
              </ListGroup>
            </p>
          </div>
        </Col>
      </Row>
    </motion.div>
  )
}

export default Contacts;