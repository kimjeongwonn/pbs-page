import React from 'react';
import { Container, Row, Col, Collapse } from 'react-bootstrap';
import icon1 from '../icon/icon-1.svg';
import icon2 from '../icon/icon-2.svg';
import icon3 from '../icon/icon-3.svg';
import icon4 from '../icon/icon-4.svg';

const Area = () => {
  return (
    <>
      <div className="area d-flex flex-column h-100 justify-content-center p-0 px-md-5 px-0">
        <Row className="title-area align-self-center align-items-center text-center justify-content-center w-md-50 w-75 ">
          <span className="title">Business Area of Plumbug Studio</span>
          <Row className="subtitle d-md-block d-none">
            플럼버그 스튜디오는 웹, 모바일 서비스 개발과 더불어 블록체인을 핵심 기술로 여러분께 제공합니다. 또한 다양한
            응용 시스템 개발, 컨설팅과 더불어 프로젝트의 기획, 디자인까지 올인원으로 제공해드립니다. 플럼버그 스튜디오의
            모던한 기술과 함께하세요.
          </Row>
        </Row>

        <Row className="justify-content-center align-items-center text-md-center text-sm-left">
          <Col md={3} xs={10} className="area-box d-flex flex-row flex-md-column align-items-center">
            <img src={icon2} className="icon mb-md-3"></img>
            <div className="area-content">
              <div className="area-title mb-md-2 mb-1">웹 / 모바일 서비스 개발</div>
              <div className="area-description">
                반응형 모던 웹, SPA와 하이브리드 앱, 안드로이드 및 OS 앱을 개발합니다.
              </div>
            </div>
          </Col>
          <Col md={3} xs={10} className="area-box d-flex flex-row flex-md-column align-items-center">
            <img src={icon1} className="icon mb-md-3"></img>
            <div className="area-content">
              <div className="area-title mb-md-2 mb-1">마케팅 솔루션</div>
              <div className="area-description">블록체인을 이용한 마케팅, P2P 거래, ICO 솔루션 등을 개발합니다.</div>
            </div>
          </Col>
          <div className="w-100"></div>
          <Col md={3} xs={10} className="area-box d-flex flex-row flex-md-column align-items-center">
            <img src={icon3} className="icon mb-md-3"></img>
            <div className="area-content">
              <div className="area-title mb-md-2 mb-1">블록체인 지갑</div>
              <div className="area-description">
                이더리움, 비트코인 등 메이저 코인과 ERC-20 토큰 및 각종 알트코인 기반 토큰을 탑재한 지갑을 개발합니다.
              </div>
            </div>
          </Col>
          <Col md={3} xs={10} className="area-box d-flex flex-row flex-md-column align-items-center">
            <img src={icon4} className="icon mb-md-3"></img>
            <div className="area-content">
              <div className="area-title mb-md-2 mb-1">스마트 컨트랙트(DAPP)</div>
              <div className="area-description">
                이더리움, 이오스 기반의 스마트 컨트랙트 개발로 메인넷에서 검증된 결제시스템, 게임 등을 개발합니다.
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="m-0 text-white align-items-center py-md-0 py-2">
        <Col md={6} xs={12} className="text-md-left text-center">
          support@plumbug.studio | 070-8065-3385 | 대표 : 김준수
          <br />
          주소 : 서울특별시 서초구 강남대로 107길 21, 대능빌딩 2층
        </Col>
        <Col md={6} xs={12} className="text-md-right text-center">
          © Copyright 2020 PlumbugStudio all rights reserved.
          <br />
          사업자 등록번호 : 101-24-50978
        </Col>
      </Row>
    </>
  );
};

export default Area;
