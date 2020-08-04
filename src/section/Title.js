import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import logo from '../logo.svg';

export default () => {
  const arrowProps = useSpring({
    from: { xy: [0, -10], o: 0 },
    to: async (next) => {
      await next({ xy: [0, 0], o: 30 });
      while (true) {
        await next({ xy: [0, 5], o: 30 });
        await next({ xy: [0, 0], o: 30 });
      }
    },
  });
  const [imgProps, set] = useSpring(() => ({
    delay: 500,
    from: {
      s: 1.5,
      o: 0,
      shadow: 0,
    },
    s: 1,
    o: 1,
    shadow: 50,
  }));

  return (
    <Container fluid>
      <div className="d-flex flex-column">

      </Container>




      
      <Row className="h-100 align-items-center justify-content-center">
        <Col className="h-25 w-25 d-flex align-items-center justify-content-center">
          <animated.div
            style={{
              height: '200px',
              width: '200px',
              top: 0,
              background: 'rgba(208, 99, 231, 0.5)',
              borderRadius: '100px',
              filter: imgProps.shadow.interpolate((s) => `blur(${s}px)`),
              opacity: imgProps.o,
            }}
          />
          <animated.div
            className="logo w-100 h-100 d-flex justify-content-center align-items-center"
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
            />
          </animated.div>
        </Col>
      </Row>
      <div className="w-100" />
      <Row className="scollBtn align-items-center justify-content-center">
        <Col xs={2} className="d-flex justify-content-center h-100">
          <animated.div
            style={{
              transform: arrowProps.xy.interpolate((x, y) => `translate(${x}px, ${y}px)`),
              filter: arrowProps.o.interpolate((o) => `opacity(${o}%)`),
            }}
          >
            <animated.div className="wheel" />
          </animated.div>
        </Col>
      </Row>
  );
};
