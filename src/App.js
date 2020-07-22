import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Title from './section/Title';
import Area from './section/Area';
import { Col, Row } from 'react-bootstrap';
import { animated, useSpring, interpolate } from 'react-spring';
import './App.css';

const App = () => {
  const arrowProps = useSpring({
    config: {},
    from: { xy: [0, -10], o: 0 },
    to: async (next) => {
      await next({ xy: [0, 0], o: 30 });
      while (true) {
        await next({ xy: [0, 5], o: 30 });
        await next({ xy: [0, 0], o: 30 });
      }
    },
  });

  return (
    <ReactFullpage
      //fullpage options
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
        console.log(state);
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Title />
              <Row
                className="scollBtn align-items-center justify-content-center"
                onClick={() => fullpageApi.moveSectionDown()}
              >
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
            </div>
            <div className="section">
              <Area />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default App;
