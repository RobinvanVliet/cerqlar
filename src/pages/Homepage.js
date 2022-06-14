import React, { Component } from "react";
import { createClient } from "contentful";
import {BrowserRouter, Route, Link} from 'react-router-dom'
import styled from 'styled-components';
import { COLOR } from "../theme/basics/colors";
import { FONTFAMILIES } from '../theme/basics/font';
import Homepage2 from "../contentBlocks/Homepage_2";
import Homepage1 from "../contentBlocks/Homepage_1";
import Homepage3 from "../contentBlocks/Homepage_3";
import Navbar from "../components/Navbar";
import IntroBlock from "../components/IntroBlock";
import Footer from "../contentBlocks/Footer";

class Homepage extends Component {
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
        <Homepage1/>
        <Homepage2/>
        <Homepage3/>
        <Footer/>
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




export default Homepage;
