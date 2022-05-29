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
         'fields.slug': "trades",
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
          <Row>
          <Title>
            {this.state.items.map((page) => {
              return <p key={page.sys.id}>{page.fields.body[0].fields.title}</p>;
            })}
          </Title>
          <div>{this.state.items.map((page) => {
              return <li key={page.sys.id}>{page.fields.body[0].fields.content}</li>;
            })}</div> 
            
          <p>{this.state.items.map((page) => {
              return <li key={page.sys.id}>{page.fields.seoDescription}</li>;
            })}</p>   
          <p>{this.state.items.map((page) => {
              return <li key={page.sys.id}>{page.fields.body[0].fields.name}</li>;
            })}</p> 
          </Row>       
       </Header>
    </Container>
    );
  }
}

const Container = styled.div`
position: relative;
margin: 6rem 0px;
`;

const Header = styled.div`
position: relative;
margin: 6rem 0px;
`;

const Row = styled.div`
-webkit-box-align: center;
align-items: center;
flex-direction: row-reverse;
-webkit-box-pack: justify;
justify-content: space-between;
`;


const Title = styled.div`
font-size: 50px;
color: ${COLOR.NIGHT_BLACK};
font-family: ${FONTFAMILIES.TT_INTERFACES};
`;

export default Trades;
