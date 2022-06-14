import React, { Component } from "react";
import { createClient } from "contentful";
import {BrowserRouter, Route, Link} from 'react-router-dom'
import styled from 'styled-components';
import { COLOR } from "../theme/basics/colors";
import { FONTFAMILIES } from '../theme/basics/font';
// import { tradeCaptures } from '../img/tradecaptures.webp';
import tradeCaptures from '../components/tradecaptures.webp'
import contractsCaptures from '../components/contractscaptures.webp'
import "./Solution.css"; 

class Solution extends Component {
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
         'fields.slug': "solution",
         include: 3,
                    
      })
      .then((response) => {
        this.setState({ items: response.items })
        console.log(response)  
      });
  }

  render() {
    return (
      <StyledContainer>
        <Container>
          <Header>
            <Row>
            <StyledColumn>
            <Title>
              {this.state.items.map((page) => {
                return <p className='p__title' key={page.sys.id}>{page.fields.body[0].fields.title}</p>;
              })}
            </Title>
            <RichTexContainer>
            {this.state.items.map((page) => {
                return <p className='p__content' key={page.sys.id}>{page.fields.body[0].fields.content}</p>;
              })}
            <Button>
              <Label>
            <a>{this.state.items.map((page) => {
                return <p key={page.sys.id}>{page.fields.body[0].fields.callToAction.fields.name}</p>;
              })}</a> 
              </Label>
              <StyledIcon>
                <svg className="arrow" viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <g clip-path='url(#clip0)'>
                  <path d="M5.348 11.586L3 13.931v-3.172l2.348-2.345 2.917-2.828V8.76l-2.917 2.827zM13.174 6.345V22h-2.348V3.103L11.964 2 21 10.759v3.172l-7.826-7.586z"></path>
                  </g>
                </svg>
              </StyledIcon>
          </Button>
            </RichTexContainer>
            </StyledColumn>
              <ImageContainer>
            <img className='tradesCaptures' src={tradeCaptures} alt='Logo' loading='lazy'></img> 
              </ImageContainer>
            </Row> 
          </Header>
        </Container>  
        <Container>
          <Header>
            <SecondRow>
            <StyledColumn>
            <Title>
              {this.state.items.map((page) => {
                return <p className='p__title' key={page.sys.id}>{page.fields.body[1].fields.title}</p>;
              })}
            </Title>
            <RichTexContainer>
            {this.state.items.map((page) => {
                return <p className='p__content' key={page.sys.id}>{page.fields.body[1].fields.content}</p>;
              })}
            <Button>
              <Label>
            <a>{this.state.items.map((page) => {
                return <p key={page.sys.id}>{page.fields.body[1].fields.callToAction.fields.name}</p>;
              })}</a> 
              </Label>
              <StyledIcon>
                <svg className="arrow" viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <g clip-path='url(#clip0)'>
                  <path d="M5.348 11.586L3 13.931v-3.172l2.348-2.345 2.917-2.828V8.76l-2.917 2.827zM13.174 6.345V22h-2.348V3.103L11.964 2 21 10.759v3.172l-7.826-7.586z"></path>
                  </g>
                </svg>
              </StyledIcon>
          </Button>
            </RichTexContainer>
            </StyledColumn>
              <ImageContainer>
            <img className='tradesCaptures' src={contractsCaptures} alt='Logo' loading='lazy'></img> 
              </ImageContainer>
            </SecondRow>   
          </Header>
        </Container>
        <Container>
          <Header>
            <Row>
            <StyledColumn>
            <Title>
              {this.state.items.map((page) => {
                return <p className='p__title' key={page.sys.id}>{page.fields.body[2].fields.title}</p>;
              })}
            </Title>
            <RichTexContainer>
            {this.state.items.map((page) => {
                return <p className='p__content' key={page.sys.id}>{page.fields.body[2].fields.content}</p>;
              })}
            <Button>
              <Label>
            <a>{this.state.items.map((page) => {
                return <p key={page.sys.id}>{page.fields.body[2].fields.callToAction.fields.name}</p>;
              })}</a> 
              </Label>
              <StyledIcon>
                <svg className="arrow" viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <g clip-path='url(#clip0)'>
                  <path d="M5.348 11.586L3 13.931v-3.172l2.348-2.345 2.917-2.828V8.76l-2.917 2.827zM13.174 6.345V22h-2.348V3.103L11.964 2 21 10.759v3.172l-7.826-7.586z"></path>
                  </g>
                </svg>
              </StyledIcon>
          </Button>
            </RichTexContainer>
            </StyledColumn>
              <ImageContainer>
            <img className='tradesCaptures' src={tradeCaptures} alt='Logo' loading='lazy'></img> 
              </ImageContainer>
            </Row>
          </Header>
        </Container>
       
     
    </StyledContainer>
    );
  }
}

const StyledContainer = styled.div`
position: relative;
margin: 0px auto;
max-width: 1500px;
`;

const Container = styled.div`
padding-left: 56px;
padding-right: 56px;
position: relative;
margin: 6rem 0px;
`;

const Header = styled.div`
width: 100%;
margin: 0px auto;
max-width: 1500px;
`;

const Row = styled.div`
-webkit-box-align: center;
align-items: center;
// flex-direction: row-reverse;
-webkit-box-pack: justify;
justify-content: space-between;
margin: calc(-16px);
display: flex;
// flex-wrap: wrap;
box-sizing: border-box;
`;

const SecondRow = styled.div`
-webkit-box-align: center;
align-items: center;
flex-direction: row-reverse;
-webkit-box-pack: justify;
justify-content: space-between;
margin: calc(-16px);
display: flex;
// flex-wrap: wrap;
box-sizing: border-box;
`;

const StyledColumn = styled.div`
padding: calc(16px);
width: calc(50%);
`;

const ImageContainer = styled.div`
padding: calc(20px);
width: calc(50%);
`;


const Title = styled.div`
font-size: 46px;
margin-bottom: 2rem;
color: ${COLOR.NIGHT_BLACK};
font-family: ${FONTFAMILIES.TT_INTERFACES};
`;

const RichTexContainer = styled.div`
box-sizing: content-box;
margin: initial;
padding: initial;
color: ${COLOR.NIGHT_BLACK};
font-family: ${FONTFAMILIES.TT_INTERFACES};
line-height: 1.63;
`;

const Button = styled.div`
padding: 0px;
min-height: 5.6rem;
font-size: 16px;
line-height: 1.6;
color: ${COLOR.AQUA_BLUE};
background-color: transparent;
border-radius: 0px;
border: none;
font-weight: 400;
cursor: pointer;
position: relative;
text-align: center;
display: inline-flex;
-webkit-box-align: center;
align-items: center;
width: auto;
transition: all 0.3s cubic-bezier(0.45, 0, 0.55, 1) 0s;
`;

const Label = styled.div`
position: relative;
width: 100%;
font-weight: 700;
`;

const StyledIcon = styled.div`
margin-left: 1rem;
fill: ${COLOR.AQUA_BLUE};
`;




export default Solution;
