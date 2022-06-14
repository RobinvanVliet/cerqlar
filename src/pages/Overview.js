import React, { Component } from "react";
import { createClient } from "contentful";
import {BrowserRouter, Route, Link} from 'react-router-dom'
import styled from 'styled-components';
import { COLOR } from "../theme/basics/colors";
import { FONTFAMILIES } from '../theme/basics/font';
import Navbar from "../components/Navbar";
import IntroBlock from "../components/IntroBlock";
import Solution from "../contentBlocks/Solution_1";
import Solution from "../contentBlocks/Solution_2";

class Overview extends Component {
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
        <IntroBlock>
        </IntroBlock>
        <Navbar>
        </Navbar>
        <Solution/>
        <Solution2/>
      </Container>

    );
  }
}

const Container = styled.div`
`;

const Text = styled.div`
background-color: red;
z-index: 2;
`;




export default Overview;
