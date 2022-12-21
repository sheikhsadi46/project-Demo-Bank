import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CheckoutSteps(props) {
  return (
    <Row className="checkout-steps">
      <Col className={props.step1 ? 'active' : ''}>Amount</Col>
      <Col className={props.step2 ? 'active' : ''}>Confirm</Col>
    </Row>
  );
}