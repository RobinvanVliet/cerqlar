import React, { Component } from "react";
import { createClient } from "contentful";
import {BrowserRouter, Route, Link} from 'react-router-dom'
import styled from 'styled-components';
import { COLOR } from "../theme/basics/colors";
import { FONTFAMILIES } from '../theme/basics/font';
import { IconS1 } from "../icons/Icon_solution_1";
import { IconS2 } from "../icons/Icon_solution_2";
import { IconS3 } from "../icons/Icon_solution_3";
import { IconS4 } from "../icons/Icon_solution_4";
import { IconS5 } from "../icons/Icon_solution_5";
import { IconS6 } from "../icons/Icon_solution_6";

class Trades extends Component {
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
        <Header>
          <StyledColumn>
          <Title>{this.state.items.map((page) => {
              return <div key={page.sys.id}>{page.fields.body[0].fields.title}</div>;
            })}
          </Title>   
          <Description>{this.state.items.map((page) => {
                return <div key={page.sys.id}>{page.fields.body[0].fields.description}</div>;
            })}
          </Description> 
          </StyledColumn>

          <Columns>
          <Column>
          <Icon>
            <IconS1/>
          </Icon>
          <H2>
          <p>{this.state.items.map((page) => {
                        return <p key={page.sys.id}>{page.fields.body[0].fields.items[0].fields.title}</p>;
                    })}</p>
         </H2>    
         <TextDescription>  
            <p>{this.state.items.map((page) => {
                    return <p key={page.sys.id}>{page.fields.body[0].fields.items[0].fields.description}</p>;
                })}</p>
          </TextDescription>
          </Column>

          <Column>
          <Icon>
            <IconS2/>
          </Icon>
          <H2>
          <p>{this.state.items.map((page) => {
                        return <p key={page.sys.id}>{page.fields.body[0].fields.items[1].fields.title}</p>;
                    })}</p>
          </H2>  
          <TextDescription>    
            <p>{this.state.items.map((page) => {
                    return <p key={page.sys.id}>{page.fields.body[0].fields.items[1].fields.description}</p>;
                })}</p>
          </TextDescription>
          </Column>

          <Column>
          <Icon>
            <IconS3/>
          </Icon>
            <H2>
          <p>{this.state.items.map((page) => {
                        return <p key={page.sys.id}>{page.fields.body[0].fields.items[2].fields.title}</p>;
                    })}</p>   
            </H2>   
            <TextDescription>
            <p>{this.state.items.map((page) => {
                    return <p key={page.sys.id}>{page.fields.body[0].fields.items[2].fields.description}</p>;
                })}</p>
            </TextDescription>
          </Column>
          </Columns>

          <Columns>
          <Column>
          <Icon>
            <IconS4/>
          </Icon>
          <H2>
          <p>{this.state.items.map((page) => {
                        return <p key={page.sys.id}>{page.fields.body[0].fields.items[3].fields.title}</p>;
                    })}</p>
         </H2>    
         <TextDescription>  
            <p>{this.state.items.map((page) => {
                    return <p key={page.sys.id}>{page.fields.body[0].fields.items[3].fields.description}</p>;
                })}</p>
          </TextDescription>
          </Column>

          <Column>
          <Icon>
            <IconS5/>
          </Icon>
          <H2>
          <p>{this.state.items.map((page) => {
                        return <p key={page.sys.id}>{page.fields.body[0].fields.items[4].fields.title}</p>;
                    })}</p>
          </H2>  
          <TextDescription>    
            <p>{this.state.items.map((page) => {
                    return <p key={page.sys.id}>{page.fields.body[0].fields.items[4].fields.description}</p>;
                })}</p>
          </TextDescription>
          </Column>

          <Column>
          <Icon>
            <IconS6/>
          </Icon>
            <H2>
          <p>{this.state.items.map((page) => {
                        return <p key={page.sys.id}>{page.fields.body[0].fields.items[5].fields.title}</p>;
                    })}</p>   
            </H2>   
            <TextDescription>
            <p>{this.state.items.map((page) => {
                    return <p key={page.sys.id}>{page.fields.body[0].fields.items[5].fields.description}</p>;
                })}</p>
            </TextDescription>
          </Column>
          </Columns>
        </Header>
      </Container>

    );
  }
}

const Container = styled.div`
  padding-left: 80px;
  padding-right: 80px;
`;

const Header = styled.div`
  background-color: ${COLOR.SANDY_BEIGE};
  margin: 6rem 0px;
 
`;

const StyledColumn = styled.div`
  padding-top: 2.2rem;
  padding-bottom: 3.2rem;
`;

const Title = styled.div`
  font-size: 50px;
  color: ${COLOR.NIGHT_BLACK};
  font-family: ${FONTFAMILIES.TT_INTERFACES};
  text-align: center;
  margin: 0;
`;

const Description = styled.div`
font-size: 16px;
color: ${COLOR.NIGHT_BLACK};
font-family: ${FONTFAMILIES.TT_INTERFACES};
text-align: center;
margin-top: 20px;
width: calc(66.6667%);
margin-left: calc(16.6667%);
line-height: 1.63;
`;

const Columns = styled.div`
  display: flex;
	flex-flow: row wrap;
	justify-content: center;
	margin: 5px 0;
`;

const Column = styled.div`
  flex: 1;
  margin: 2px;
  padding: 10px;
  &:first-child { margin-left: 0; }
  &:last-child { margin-right: 0; }

`;
const Icon = styled.div`
  height: 71px;
  width: 71px;
  margin-left: auto;
  margin-right: auto;
`;

const H2 = styled.div`
  text-align: center; 
  font-size: 18px;
  font-family: ${FONTFAMILIES.TT_INTERFACES};
  font-weight: bolder;
  font-style: normal;
  line-height: 1.3;
`;

const TextDescription = styled.div`
  text-align: center;
  width: 290px;
  margin-left: auto;
  margin-right: auto;
  font-family: ${FONTFAMILIES.NEUE_HAAS};
  font-weight: normal;
  font-style: normal;
  line-height: 1.63;
  font-size: 16px;
  color: rgb(40, 38, 41);
`;


export default Trades;
