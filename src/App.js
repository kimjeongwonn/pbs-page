import React from 'react';
import Title from './section/Title';
import Area from './section/Area';
import { Col, Row } from 'react-bootstrap';
import { animated, useSpring } from 'react-spring';
import './App.css';

const App = () => {
  return (
    <>
      <div className="page">
        <Title />
      </div>
      <div className="page">
        <Area />
      </div>
    </>
  );
};

export default App;
