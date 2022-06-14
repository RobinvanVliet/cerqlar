import React, { Component } from "react";
import { createClient } from "contentful";
import {BrowserRouter, Route, Link} from 'react-router-dom'
import styled from 'styled-components';
import { COLOR } from "../theme/basics/colors";
import { FONTFAMILIES } from '../theme/basics/font';

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
          <Title>{this.state.items.map((page) => {
              return <div key={page.sys.id}>{page.fields.body[0].fields.title}</div>;
            })}</Title>     
          <Description>{this.state.items.map((page) => {
                return <div key={page.sys.id}>{page.fields.body[0].fields.description}</div>;
            })}</Description> 
         <p>{this.state.items.map((page) => {
                return <li key={page.sys.id}>{page.fields.body[0].fields.items[0].fields.title}</li>;
            })}</p>   
          <p>{this.state.items.map((page) => {
                return <li key={page.sys.id}>{page.fields.body[0].fields.items[0].fields.description}</li>;
            })}</p> 
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

const Title = styled.div`
font-size: 50px;
color: ${COLOR.NIGHT_BLACK};
font-family: ${FONTFAMILIES.TT_INTERFACES};
text-align: center;
`;

const Description = styled.div`
font-size: 16px;
color: ${COLOR.NIGHT_BLACK};
font-family: ${FONTFAMILIES.TT_INTERFACES};
text-align: center;
margin-top: 20px;

line-height: 1.63;
`;
export default Trades;
