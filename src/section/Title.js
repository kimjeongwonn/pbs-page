import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../logo.png';
import { useSpring, animated, config } from 'react-spring';
import { fullpageApi } from '@fullpage/react-fullpage';

export default () => {
  const [imgProps, set] = useSpring(() => ({
    config: config.slow,
    from: {
      transform: 'scale(1.2)',
      filter: 'opacity(0%) drop-shadow(0px 0px 50px rgba(233, 41, 157, 0.5))',
    },
    transform: 'scale(1)',
    filter: 'opacity(100%) drop-shadow(0px 0px 10px rgba(233, 41, 157, 0.5)',
  }));

  return (
    <Container fluid className="h-100 align-items-center">
      <Row className="h-100 align-items-center justify-content-center">
        <Col className="h-25 d-flex align-items-center justify-content-center">
          <animated.div className="logo w-100 h-100 d-relative" style={imgProps}>
            <div
              className="w-25 h-100 d-absolute"
              style={{ margin: '0 auto' }}
              onMouseOver={() =>
                set({
                  transform: 'scale(1.05)',
                  filter: 'opacity(100%) drop-shadow(0px 0px 20px rgba(233, 41, 157, 0.5))',
                })
              }
              onMouseLeave={() =>
                set({
                  transform: 'scale(1)',
                  filter: 'opacity(100%) drop-shadow(0px 0px 10px rgba(233, 41, 157, 0.5))',
                })
              }
              onMouseDown={() =>
                set({
                  transform: 'scale(0.95)',
                  filter: 'opacity(100%) drop-shadow(0px 0px 5px rgba(233, 41, 157, 0.5))',
                })
              }
              onMouseUp={() =>
                set({
                  transform: 'scale(1.05)',
                  filter: 'opacity(100%) drop-shadow(0px 0px 20px rgba(233, 41, 157, 0.5))',
                })
              }
            />
          </animated.div>
        </Col>
      </Row>
    </Container>
  );
};
