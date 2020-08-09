import React from 'react';
import {
  AreaContainer,
  TitleContainer,
  Title,
  Subtitle,
  AreaBox,
  AreaIcon,
  AreaTitle,
  AreaDescription,
  AreaItems,
  AreaText,
  Footer,
  FooterContent,
} from './style';
import icon1 from '../icon/icon-1.svg';
import icon2 from '../icon/icon-2.svg';
import icon3 from '../icon/icon-3.svg';
import icon4 from '../icon/icon-4.svg';

const AreaItem = ({ icon, title, description }) => (
  <AreaBox>
    <AreaIcon icon={icon} />
    <AreaText>
      <AreaTitle>{title}</AreaTitle>
      <AreaDescription>{description}</AreaDescription>
    </AreaText>
  </AreaBox>
);

const Area = () => {
  return (
    <>
      <AreaContainer>
        <TitleContainer>
          <Title>Business Area of Plumbug Studio</Title>
          <Subtitle>
            플럼버그 스튜디오는 웹, 모바일 서비스 개발과 더불어 블록체인을 핵심 기술로 여러분께 제공합니다. 또한 다양한
            응용 시스템 개발, 컨설팅과 더불어 프로젝트의 기획, 디자인까지 올인원으로 제공해드립니다. 플럼버그 스튜디오의
            모던한 기술과 함께하세요.
          </Subtitle>
        </TitleContainer>
        <AreaItems>
          <AreaItem
            icon={icon2}
            title="웹 / 모바일 서비스 개발"
            description="반응형 모던 웹, SPA와 하이브리드 앱, 안드로이드 및 OS 앱을 개발합니다."
          />
          <AreaItem
            icon={icon1}
            title="마케팅 솔루션"
            description="블록체인을 이용한 마케팅, P2P 거래, ICO 솔루션 등을 개발합니다."
          />
          <AreaItem
            icon={icon3}
            title="블록체인 지갑"
            description="이더리움, 비트코인 등 메이저 코인과 ERC-20 토큰 및 각종 알트코인 기반 토큰을 탑재한 지갑을 개발합니다."
          />
          <AreaItem
            icon={icon4}
            title="스마트 컨트랙트(DAPP)"
            description="이더리움, 이오스 기반의 스마트 컨트랙트 개발로 메인넷에서 검증된 결제시스템, 게임 등을 개발합니다."
          />
        </AreaItems>
        <Footer>
          <FooterContent align="left">
            support@plumbug.studio | 070-8065-3385 | 대표 : 김준수
            <br />
            주소 : 서울특별시 서초구 강남대로 107길 21, 대능빌딩 2층
          </FooterContent>
          <FooterContent align="right">
            © Copyright 2020 PlumbugStudio all rights reserved.
            <br />
            사업자 등록번호 : 101-24-50978
          </FooterContent>
        </Footer>
      </AreaContainer>
    </>
  );
};

export default Area;
