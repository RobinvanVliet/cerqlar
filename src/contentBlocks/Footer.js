import React, { Component } from "react";
import { createClient } from "contentful";
import {BrowserRouter, Route, Link} from 'react-router-dom'
import styled from 'styled-components';
import { COLOR } from "../theme/basics/colors";
import { FONTFAMILIES } from '../theme/basics/font';
import logo from '../img/logo-light.svg';
import logocolor from '../img/logocolor.svg';
import footerimg1 from '../img/footerimg1.webp';
import footerimg2 from '../img/footerimg2.webp';

class Footer extends Component {
  constructor() {
    super();
    this.state = { items: [] };
    this.client = createClient({
      space: "xd2120uguiqw",
      accessToken:
        "zxN1svY1J8QHgpWN-zG6nt4BbjM2bnX71ol4lulIngU",
      host: "preview.contentful.com"
    });
  }

  componentDidMount() {
    this.client
      .getEntries({
         content_type: "page",
         'fields.slug': "homepage",
         include: 3,
                    
      })
      .then((response) => {
        this.setState({ items: response.items })
        console.log(response)  
      });
  }

  render() {
    return (
      <FooterContainer>
        <Container>
          <Row>
            <StyledColumn>
            <a aria-label="Home" href="/Home">
              <Logo>
                <ImageWrapper>
              <img className='logoContainer' src={logocolor} alt='Logo' loading='lazy'></img>
               </ImageWrapper>
              </Logo>
               </a>
            <StyledContactInfo>
              <StyledAdress>
              Strawinskylaan 3127 
              <br/>
               1077 ZX Amsterdam
               <br/>
               The Netherlands
              </StyledAdress>
            </StyledContactInfo>
            </StyledColumn>
            <StyledColumn>
              <LinkList>
              <SocialText>
                Solution
                </SocialText>
                <SocialText>
                Careers
                </SocialText>
              </LinkList>
            </StyledColumn>
             <StyledColumn>
              <LinkList>
              <SocialText>
                Sign up for news
                </SocialText>
                <SocialText>
                Contact us
                </SocialText>
              </LinkList>
            </StyledColumn>

            <StyledColumn>
                <SocialMediaTitle>
                Follow us
                </SocialMediaTitle>
              <StyledSocialList>
                <BottomListItem>
                  <ImageWrapper2>
                  <img className='logoContainer' src={footerimg1} alt='Logo' loading='lazy'></img>
                </ImageWrapper2>
                </BottomListItem>
                <BottomListItem>
                  <ImageWrapper2>
                  <img className='logoContainer' src={footerimg2} alt='Logo' loading='lazy'></img>
                </ImageWrapper2>
                </BottomListItem>
              </StyledSocialList>
            </StyledColumn>
            
          </Row>
          <StyledBottomItems>
              <StyledBottomList>
                <BottomListItem>
                  <TextBottom>
                  Privacy
                  </TextBottom>
                  <TextBottom>
                  Terms
                  </TextBottom>
                  <TextBottom>
                  © CerQlar 2021
                  </TextBottom>
                </BottomListItem>
              </StyledBottomList>
            </StyledBottomItems>
        </Container>
             
      </FooterContainer>

    );
  }
}

const FooterContainer = styled.div`
  padding: 7.5rem 0px 3.2rem;
  text-align: left;
  background-color: rgb(42, 39, 46);
`;

const Container = styled.div`
  padding-left: 80px;
  padding-right: 80px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: calc(-20px);
  
`;

const StyledColumn = styled.div`
  padding: calc(20px);
  margin-left: auto;
  margin-right: auto;
`;

const Logo = styled.div`
  // width: 10rem;
`;

const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  border-radius: 0.6rem;
`;

const StyledContactInfo = styled.div`
text-align: left;
`;

const StyledAdress = styled.address`
  color: ${COLOR.SNOW_WHITE};
  margin: 2.4rem 0px 0px;
  font-family: ${FONTFAMILIES.NEUE_HAAS};
  font-style: normal;
  line-height: 1.63;
  font-size: 12px;

`;
const LinkList = styled.ul`
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  padding: 0px 0px 0px 3.2rem;
`;

const SocialMediaTitle = styled.div`
  width: auto;
  margin-right: 0.4rem;
  margin-top: -4px;
  color: rgb(255, 255, 255);
  font-weight: 500;
  font-family: ${FONTFAMILIES.NEUE_HAAS};
  font-size: 12px;
`;

const StyledSocialList = styled.ul`
  display: flex;
  flex-wrap: wrap; 
  list-style: none; 
`;

const BottomListItem = styled.li`
  padding: 0.8rem rem 0.8rem 0px;
  display: flex;
  flex-wrap: wrap;
  
`;

const ImageWrapper2 = styled.div`
  display: flex;
  border-radius: 0.6rem;
  position: relative;
  right: 2rem;
  padding: 4px;
`;

const SocialText = styled.div`
  width: auto;
  margin-right: 0.4rem;
  margin-top: -4px;
  color: rgb(255, 255, 255);
  font-weight: 500;
  font-family: ${FONTFAMILIES.NEUE_HAAS};
  font-size: 12px;
  margin-bottom: 1.6rem;
`;

const StyledBottomItems = styled.div`
  flex-direction: row;
  margin: 0px 0px 0px auto;
  padding: 1.6rem 2rem 2rem;
  width: calc(25%);
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
`;

const StyledBottomList = styled.ul`
  -webkit-box-align: center;
  align-items: center;
  margin: -1.2rem -1.2rem -1.2rem 0px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const TextBottom = styled.ul`
  color: ${COLOR.DARK_GREY};
  font-family: ${FONTFAMILIES.NEUE_HAAS};
  font-weight: normal;
  font-style: normal;
  line-height: 1.63;
  font-size: 12px;
`;



export default Footer;
