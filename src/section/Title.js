import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import logo from '../logo.png';

export default () => {
  const [imgProps, set] = useSpring(() => ({
    delay: 500,
    from: {
      s: 1.5,
      o: 0,
      shadow: 0,
    },
    s: 1,
    o: 1,
    shadow: 30,
  }));

  return (
    <Container fluid className="h-100">
      <Row className="h-100 align-items-center justify-content-center">
        <Col className="h-25 w-25 d-flex align-items-center justify-content-center">
          <animated.div
            style={{
              height: '200px',
              width: '200px',
              top: 0,
              background: 'rgba(233, 41, 157, 0.5)',
              borderRadius: '115px',
              filter: imgProps.shadow.interpolate((s) => `blur(${s}px)`),
              opacity: imgProps.o,
            }}
          />
          <animated.div
            className="w-100 h-100 d-flex justify-content-center align-items-center"
            style={{
              position: 'absolute',
              background: `no-repeat center url(${logo})`,
              backgroundSize: 'contain',
              opacity: imgProps.o,
              transform: imgProps.s.interpolate((s) => `scale(${s})`),
            }}
          >
            <div
              className="w-25 h-100 d-absolute"
              style={{ margin: '0 auto' }}
              onMouseOver={() => set({ s: 1.05, shadow: 45 })}
              onMouseLeave={() => set({ s: 1, shadow: 30 })}
              onMouseDown={() => set({ s: 0.95, shadow: 15 })}
              onMouseUp={() => set({ s: 1.05, shadow: 45 })}
            />
          </animated.div>
        </Col>
      </Row>
    </Container>
  );
};
