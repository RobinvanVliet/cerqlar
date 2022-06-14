import React, { Component } from "react";
import { createClient } from "contentful";
import {BrowserRouter, Route, Link} from 'react-router-dom'
import styled from 'styled-components';
import { COLOR } from "../theme/basics/colors";
import { FONTFAMILIES } from '../theme/basics/font';
import homepage from '../img/homepage.webp'

class Homepage2 extends Component {
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
        <SubContainer>
      <Circle></Circle>
        <StyledContainer>
          <Row>
            <StyledColumn>
          <Img>
            <img className='logoContainer' src={homepage} alt='Logo' loading='lazy'></img>
          </Img>
            <H2>
              <div>{this.state.items.map((page) => {
                          return <div key={page.sys.id}>{page.fields.body[1].fields.title}</div>;
               })}</div>
            </H2>
            <P>
              <p>{this.state.items.map((page) => {
                            return <p key={page.sys.id}>{page.fields.body[1].fields.description}</p>;
              })}</p>
            </P>
            <Button>
              <Label>
                <a>{this.state.items.map((page) => {
                  return <p key={page.sys.id}>{page.fields.body[1].fields.callToAction.fields.label}</p>;
                })}</a> 
              </Label>
            </Button>
            </StyledColumn>
          </Row>
        </StyledContainer>
        </SubContainer>
      </Container>

    );
  }
}

const Container = styled.div`
  padding-left: 80px;
  padding-right: 80px;
`;

const SubContainer = styled.div`
  padding: 0px 0px 4.8rem;
  position: relative;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  background-color: ${COLOR.AQUA_BLUE}


`;

const Circle = styled.div`
    width: 500px;
    height: 500px;
    background-color: ${COLOR.AQUA_BLUE};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 32%;
    transform: translate(-50%, -50%);
    z-index: 1;
`;

const StyledContainer = styled.div`
  padding-left: 80px;
  padding-right: 80px;
  width: 100%;
  margin: 0px auto;
  max-width: 1500px;
`;

const Row = styled.div`
  margin: calc(-20px);
  display: flex;
  flex-wrap: wrap;
`;

const StyledColumn = styled.div`
  padding-top: calc(65px)
`;

const Button = styled.div`
  flex-direction: row;
  -webkit-box-pack: start;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: left;
  margin: 0px auto;
`;

const Label = styled.div`
  background-color: rgb(42, 39, 46);
  border-radius: 0.4rem;
  border: 2px solid rgb(42, 39, 46);
  font-family: ${FONTFAMILIES.TT_INTERFACES};
  font-weight: 600;
  font-size: 16px;
  color: rgb(255, 255, 255);
  padding: 0rem 2.2rem;
  cursor: pointer;
  position: relative;
  text-align: center;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  width: 5.5rem;
  transition: all 0.3s cubic-bezier(0.45, 0, 0.55, 1) 0s;
  z-index: 1;
`;

const Img = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  width: calc((100% - 1500px) / 2 + 875px);
  margin-left: 0px;
  height: 100%;
  object-fit: cover;
`;

const H2 = styled.div`
  position: relative;
  font-size: 46px;
  color: ${COLOR.SNOW_WHITE};
  z-index: 1;
  text-align: left;
`;

const P = styled.div`
  position: relative;
  color: ${COLOR.SNOW_WHITE};
  margin-bottom: 2rem;
  z-index: 1;
`;



export default Homepage2;
