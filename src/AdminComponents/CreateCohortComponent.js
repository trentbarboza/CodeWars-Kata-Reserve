import React from "react";
import { Form, FloatingLabel, ListGroup, Row, Col, Container, Button } from "react-bootstrap";
export default function CreateCohortComponent() {
  return (
    <>
    <Container className='grayCardBg mt-5 pt-4 pb-4 roundedCorners'>
      <Row>
        <Col sm={3}>
        <h3 className="headerText text-end" style={{ color: "white" }}>
        Create Cohort:
      </h3>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm={6}>
        <FloatingLabel
        controlId="floatingInput"
        label="Example: Season 1 Cohort"
        className="mb-3 allText "
        style={{ color: "white" }}
      >
        <Form.Control
          className="loginForm loginFormText"
          type="text"
          placeholder="Cohort's name"
        />
      </FloatingLabel>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm={6}>
       
      <Form.Select aria-label="Default select example" className="listGroupBG">
        <option>Select Cohort's Kata Level</option>
        <option value="8">8 Kyu Kata</option>
        <option value="7">7 Kyu Kata</option>
        <option value="6">6 Kyu Kata</option>
        <option value="5">5 Kyu Kata</option>
        <option value="4">4 Kyu Kata</option>
        <option value="4">3 Kyu Kata</option>
        <option value="2">2 Kyu Kata</option>
        <option value="1">1 Kyu Kata</option>
      </Form.Select>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm={6}>
        <Button variant="success" type="submit" className="mt-3 allText">
          Submit
        </Button>
        </Col>
      </Row>

      <Row>
        <Col sm={3}>
        <h3 className="mt-4 headerText text-end"  style={{ color: "white" }}>Add Users:</h3>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col sm={6}>
        <ListGroup as="ul">
        <ListGroup.Item as ="li" className="listGroupBG">Danny</ListGroup.Item>
        <ListGroup.Item as ="li" className="listGroupBG">Trent</ListGroup.Item>
        <ListGroup.Item as ="li" className="listGroupBG">Dylan</ListGroup.Item>
        <ListGroup.Item as ="li" className="listGroupBG">Walaa</ListGroup.Item>
      </ListGroup>
        </Col>
      </Row>
      
    </Container>
    
     

      

      {/* ListGroup as="ul">
              {allSpecialist.map((user, idx) => {
                return (
                  <ListGroup.Item
                    key={user}
                    action
                    as="li"
                    onClick={(e) => addUserToArrayId(e, user.id, user.username)}
                  >
                    {user.fullName}
                  </ListGroup.Item>
                );
              })}
            </ListGroup> */}
      
    </>
  );
}
