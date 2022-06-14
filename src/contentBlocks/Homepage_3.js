import React, { Component } from "react";
import { createClient } from "contentful";
import {BrowserRouter, Route, Link} from 'react-router-dom'
import styled from 'styled-components';
import { COLOR } from "../theme/basics/colors";
import { FONTFAMILIES } from '../theme/basics/font';
import { IconTM1 } from "../icons/Icon_trademanagement_1";
import contractscaptures from '../img/contractscaptures.webp';

class Homepage3 extends Component {
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
      <Container>
        <Row>
          <StyledColumn>
            <StyledHeader>
              <H2>
              <p>{this.state.items.map((page) => {
                            return <p key={page.sys.id}>{page.fields.body[2].fields.title}</p>;
                 })}</p>
              </H2>
              <P>
                <p>{this.state.items.map((page) => {
                            return <p key={page.sys.id}>{page.fields.body[2].fields.description}</p>;
                 })}</p>
              </P>
            </StyledHeader>
          </StyledColumn>
       
        <StyledContainer>
          <StyledLabelList>
            <StyledLabelListItem>
             <StyledLabel>
              <p>Spend less time on capturing your trades</p>
              </StyledLabel>
            </StyledLabelListItem>
         
            <StyledLabelListItem>
             <StyledLabelSecond>
              <p>Automate the creation of your trade agreements</p>
              </StyledLabelSecond>
            </StyledLabelListItem>

            <StyledLabelListItem>
             <StyledLabelSecond>
              <p>Manage and track the inventory of your certificates</p>
              </StyledLabelSecond>
            </StyledLabelListItem>
          </StyledLabelList>
        </StyledContainer>

        <SliderContainer>
          <Row2>
            <StyledColumn2>
              <TitleH2>
              Trade Management
              </TitleH2>
             <StyledListItem>
              <StyleSpan>
                  <IconTM1/>
                </StyleSpan>
                <TextSpan>
                  Capture trades faster and without errors.
                </TextSpan>
                </StyledListItem>

                <StyledListItem>
              <StyleSpan>
                  <IconTM1/>
                </StyleSpan>
                <TextSpanSecond>
                  Work with a clear overview of all your trades and contracts.
                </TextSpanSecond>
                </StyledListItem>

                <StyledListItem>
              <StyleSpan>
                  <IconTM1/>
                </StyleSpan>
                <TextSpanSecond>
                  Don't miss delivery and payment obligations with our automated notifications
                </TextSpanSecond>
                </StyledListItem>
              <StyledButton>Learn more</StyledButton>
            </StyledColumn2>

            <StyledColumn2>
              <ImageWrapper>
              <img className='logoContainer' src={contractscaptures} alt='Logo' loading='lazy'></img>
              </ImageWrapper>
            </StyledColumn2>
          </Row2>
        </SliderContainer>
        </Row>
      </Container>

    );
  }
}

const Container = styled.div`
  padding-left: 80px;
  padding-right: 80px;
`;

const Row = styled.div`
  background-color: ${COLOR.SANDY_BEIGE};
  margin: 6rem 0px;
 
`;

const StyledColumn = styled.div`
  width: calc(66.6667%);
  margin-left: calc(16.6667%);
`;

const StyledHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const H2 = styled.h2`
  font-size: 50px;
  font-family: ${FONTFAMILIES.TT_INTERFACES};
  font-weight: normal;
  font-style: normal;
  padding-top: 0.2rem;
  color: ${COLOR.NIGHT_BLACK};
`;

const P = styled.div`
  font-family: "Neue Haas Grotesk", Verdana, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 16px;
  line-height: 1.63;
  color: ${COLOR.NIGHT_BLACK};
`;

const StyledContainer = styled.div`
  padding-left: 80px;
  padding-right: 80px;
`;

const StyledLabelList = styled.ul`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  list-style: none;
`;

const StyledLabelListItem = styled.li`
  width: 100%;
`;

const StyledLabel = styled.button`
  font-family: ${FONTFAMILIES.TT_INTERFACES};
  font-weight: bolder;
  font-style: normal;
  font-size: 18px;
  line-height: 1.3;
  color: ${COLOR.NIGHT_BLACK};
  text-align: center;
  padding-bottom: 2.4rem;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;
  background: none;
  border: none;
  border-bottom: 3px solid black;
`;

const StyledLabelSecond = styled.button`
  font-family: ${FONTFAMILIES.TT_INTERFACES};
  font-weight: bolder;
  font-style: normal;
  font-size: 18px;
  line-height: 1.3;
  color: ${COLOR.DARK_GREY};
  text-align: center; 
  padding-bottom: 2.4rem;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;
  background: none;
  border: none;
  border-bottom: 1px solid black;
`;

const StyledButton = styled.div`
  font-size: 16px;
  border-radius: 0.6rem;
  border: 2px solid rgb(63, 142, 252);
  font-family: ${FONTFAMILIES.TT_INTERFACES};
  font-weight: 600;
  color: rgb(255, 255, 255);
  cursor: pointer;
  position: relative;
  text-align: center;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px auto;
  padding: 1rem 2.2rem;
  transition: all 0.3s cubic-bezier(0.45, 0, 0.55, 1) 0s;
  background-color: rgb(63, 142, 252);

`;

const SliderContainer = styled.div`
  padding: 0px 96px;
`;


const StyledColumn2 = styled.div`
  padding: calc(20px);
  width: calc(33.3333%);
`;

const Row2 = styled.div`
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  margin: calc(-20px);
  display: flex;
  flex-wrap: wrap;
`;

const TitleH2 = styled.h2`
  display: block;
  margin-bottom: 4.2rem;
  font-size 46px;
  font-family: ${FONTFAMILIES.TT_INTERFACES};
  font-weight: normal;
  font-style: normal;
`;

const StyledListItem = styled.li`
  padding-left: 3.6rem;
  position: relative;
  list-style: none;
  margin-bottom: 2.4rem;
`;

const StyleSpan = styled.span`
  position: absolute;
  height: 24px;
  width: 24px;
  left: 0px;
  top: 0px;
  fill: rgb(86, 227, 159);
`;

const TextSpan = styled.span`
  font-weight: bold;
  color: ${COLOR.NIGHT_BLACK};
  cursor: pointer;
  font-family: ${FONTFAMILIES.Neu};
  font-size: 16px;
`;

const TextSpanSecond = styled.span`
  color: ${COLOR.DARK_GREY};
  font-family: ${FONTFAMILIES.NEUE_HAAS};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

const ImageWrapper = styled.span`
  padding: 2rem;
  cursor: pointer;
  width: 900px;
  margin-left: 5rem;
`;



export default Homepage3;
