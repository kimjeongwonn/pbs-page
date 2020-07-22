import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSpring, animated, config } from 'react-spring';

const Area = () => {
  return (
    <Container className="area">
      <Row className="h-75 justify-content-center align-items-center text-center">
        <Col lg={6} sm={12} className="text-lg-left">
          <h1>
            Business Area of
            <br />
            Plumbug Studio
          </h1>
        </Col>
        <Col lg={6} sm={12} className="circle-container d-flex justify-content-center align-items-center">
          <div className="circle-item d-flex justify-content-center align-items-center i1">
            <div className="circle-text">WEB</div>
          </div>
          <div className="circle-item d-flex justify-content-center align-items-center i2">
            <div className="circle-text">MOBILE APP</div>
          </div>
          <div className="circle-item d-flex justify-content-center align-items-center i3">
            <div className="circle-text">DEVELOP</div>
          </div>
          <div className="circle-item d-flex justify-content-center align-items-center i4">
            <div className="circle-text">BLOCK CHAIN</div>
          </div>
          <div className="circle-item d-flex justify-content-center align-items-center i5">
            <div className="circle-text">MARKETING SOLUTION</div>
          </div>
          <div className="circle-item d-flex justify-content-center align-items-center i6">
            <div className="circle-text">PLANNING</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Area;
