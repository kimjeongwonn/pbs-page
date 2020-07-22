import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSpring, animated, config } from 'react-spring';

export default () => {
  const [imgProps, set] = useSpring(() => ({
    delay: 500,
    config: config.slow,
    from: {
      transform: 'scale(1.5)',
      filter: 'opacity(0%) drop-shadow(0px 0px 50px rgba(233, 41, 157, 0.3))',
    },
    transform: 'scale(1)',
    filter: 'opacity(100%) drop-shadow(0px 0px 10px rgba(233, 41, 157, 0.3)',
  }));

  return (
    <Container fluid className="h-100">
      <Row className="h-100 align-items-center justify-content-center">
        <Col className="h-25 d-flex align-items-center justify-content-center">
          <animated.div className="logo w-100 h-100 d-relative" style={imgProps}>
            <div
              className="w-25 h-100 d-absolute"
              style={{ margin: '0 auto' }}
              onMouseOver={() =>
                set({
                  transform: 'scale(1.05)',
                  filter: 'opacity(100%) drop-shadow(0px 0px 20px rgba(233, 41, 157, 0.3))',
                })
              }
              onMouseLeave={() =>
                set({
                  transform: 'scale(1)',
                  filter: 'opacity(100%) drop-shadow(0px 0px 10px rgba(233, 41, 157, 0.3))',
                })
              }
              onMouseDown={() =>
                set({
                  transform: 'scale(0.95)',
                  filter: 'opacity(100%) drop-shadow(0px 0px 5px rgba(233, 41, 157, 0.3))',
                })
              }
              onMouseUp={() =>
                set({
                  transform: 'scale(1.05)',
                  filter: 'opacity(100%) drop-shadow(0px 0px 20px rgba(233, 41, 157, 0.3))',
                })
              }
            />
          </animated.div>
        </Col>
      </Row>
    </Container>
  );
};
