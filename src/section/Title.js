import React, { useState } from 'react';
import { LogoContainer, LogoSvg, FakeShadow, Arrow } from './style';
import logo from '../logo.svg';

export default () => {
  const [isHover, setHover] = useState(false);
  return (
    <LogoContainer>
      <LogoSvg logo={logo} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} isHover={isHover} />
      <FakeShadow />
      <Arrow />
    </LogoContainer>
  );
};
