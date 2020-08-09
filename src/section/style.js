import styled, { keyframes } from 'styled-components';

//Animation
const appear = keyframes`
  from {
    transform: scale(2);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

//Title
export const LogoContainer = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogoSvg = styled.div`
  /* position: absolute;
  bottom: 50%;
  left: 50%; */
  transform: ${({ isHover }) => (isHover ? 'scale(1.05)' : 'scale(1)')};
  background-image: url(${({ logo }) => logo});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 200px;
  height: 200px;
  transition: transform 0.5s;
  animation: 0.5s ${appear} ease-in-out;
  @media only screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;
export const FakeShadow = styled.div`
  position: absolute;
  /* 
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%); */
  width: 180px;
  height: 180px;
  background: rgba(208, 99, 231, 0.5);
  border-radius: 90px;
  animation: 0.5s ${appear} ease-in-out;
  filter: ${({ isHover }) => (isHover ? 'blur(50px)' : 'blur(45px)')};
  z-index: -1;
`;
export const Arrow = styled.div`
  position: absolute;
  bottom: 5vh;
  width: 1.2rem;
  height: 1.2rem;
  border-left: 0.15rem solid grey;
  border-bottom: 0.15rem solid grey;
  transform: rotate(-45deg);
  &::after {
    content: '';
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    border-left: 0.15rem solid grey;
    border-bottom: 0.15rem solid grey;
    transform: translate(-0.55rem, 0.4rem);
  }
`;

//Area
export const AreaContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  text-align: center;
`;

export const Title = styled.div`
  display: inline-block;
  font-family: 'Prompt', sans-serif;
  background: linear-gradient(140.79deg, #ff4ecd 2.12%, #a276ff 96.36%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
  font-size: 2.5rem;
  margin-bottom: 1.2rem;
  @media only screen and (max-width: 768px) {
    font-size: 8vw;
    margin-bottom: 0;
  }
`;

export const Subtitle = styled.div`
  max-width: 800px;
  width: 80%;
  font-size: 1rem;
  @media only screen and (max-width: 768px) {
    font-size: 0.8rem;
    display: none;
  }
`;

export const AreaItems = styled.div`
  width: 800px;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 1rem;
  }
`;

//Component_AreaItem
export const AreaBox = styled.div`
  width: 300px;
  display: flex;
  margin: 0 1rem 2rem;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  align-items: stretch;
  @media only screen and (max-width: 768px) {
    width: 80%;
    text-align: left;
    justify-content: space-around;
    flex-direction: row;
    margin: 0 0 0 0;
  }
`;

export const AreaIcon = styled.div`
  align-self: center;
  width: 80px;
  height: 80px;
  background-image: url(${({ icon }) => icon});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 1rem 1rem;
  @media only screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
    margin: 0 1rem 0 0;
  }
`;

export const AreaText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

export const AreaTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.2rem;
  }
`;

export const AreaDescription = styled.div`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  @media only screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

//Footer
export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 10%;
  color: white;
  line-height: 1.8;
  font-size: 0.8rem;
  font-weight: 400;
  height: 120px;
  background: linear-gradient(140.79deg, #ff4ecd 2.12%, #a276ff 96.36%);
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    font-size: 0.6rem;
    height: 100px;
  }
`;

export const FooterContent = styled.div`
  text-align: ${({ align }) => align};
  @media only screen and (max-width: 768px) {
    text-align: center;
    margin: 0.1rem 0;
  }
`;
