import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinkContainer>
          <FooterLinkTitle>
            ネットフリックス日本
          </FooterLinkTitle>
          <FooterLinkContent>
            <FooterLink href="https://help.netflix.com/jp/node/412">ネットフリックス紹介</FooterLink>
            <FooterLink href="https://help.netflix.com/jp">顧客センター</FooterLink>
            <FooterLink href="https://help.netflix.com/jp/">メディアセンター</FooterLink>
            <FooterLink href="https://help.netflix.com/jp/">利用規約</FooterLink>
          </FooterLinkContent>
          <FooterDescContainer>
            <FooterDescRights>
              Netflix Rights Reserved.
            </FooterDescRights>
          </FooterDescContainer>
        </FooterLinkContainer>
      </FooterContent>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  border-top: 1px solid rgb(25, 25, 25);
  width: 100%;
  position: relative;
  z-index:100;

  @media (max-width: 769px) {
      padding: 20px 20px;
      padding-bottom: 30px;
  }
`

const FooterContent = styled.div``;

const FooterLinkContainer = styled.div`
  width: 500px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FooterLinkTitle = styled.div`
  color: gray;
  font-size: 17px;
`;

const FooterLinkContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-top: 26px;
  }
`;

const FooterLink = styled.a`
  color: gray;
  font-size: 14px;
  width: 130px;
  margin-bottom: 21px;
  text-decoration: none;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-top: 16px;
  }
`;

const FooterDescContainer = styled.div`
  margin-top: 30px;
  
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const FooterDescRights = styled.div`
  color: white;
  font-size: 14px;
  text-align: center;
`;