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
import { IconS1 } from "../icons/Icon_solution_1";
import {Arrow} from "../icons/Icon_arrow";

class Solution extends Component {
  state = {
    open: false,
  };
  handleButtonClick = () => {
    this.setState((state) => {
      return {
        open: !state.open,
      };
    });
  };

  container = React.createRef();
  state = {
    open: false,
  };

  handleClickOutside = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        open: false,
      });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    }
  componentWillUnmount() {
  document.removeEventListener("mousedown", this.handleClickOutside);
    }

  render() {
    return (
    <StyledContainer> 
      <Container ref={this.container}>
        <Row>
          <StyledColumn>
            <StyledHeader>
              <H2>
                Frequently Asked Questions:
              </H2>
            </StyledHeader>
          </StyledColumn>
        </Row>
      </Container>
  <Container>
        <Row>
          <StyledColumn>
          <StyledContainer2>
          <Button>
            <Label>
                <P onClick={this.handleButtonClick}>How quick Is the onboarding? 
                  <Icon>
                    <Arrow/>
                  </Icon> 
                </P>   
                <P onClick={this.handleButtonClick}>What markets do you cover?
                  <Icon>
                    <Arrow/>
                  </Icon> 
                </P>   
                <P onClick={this.handleButtonClick}>How is my data protected?
                  <Icon>
                   <Arrow/>
                  </Icon> 
                </P> 
                <P onClick={this.handleButtonClick}>Do you contribute to climate change?
                  <Icon>
                   <Arrow/>
                  </Icon> 
                </P>   
                <P onClick={this.handleButtonClick}>What tech stack do you use?
                  <Icon>
                   <Arrow/>
                  </Icon> 
                </P>  
                <P onClick={this.handleButtonClick}>Is my data & platform access secure?
                  <Icon>
                    <Arrow/>
                  </Icon> 
                </P>
              </Label>
            </Button>
          </StyledContainer2>
        </StyledColumn>
        </Row>
      </Container>
    </StyledContainer>
    );
  }
}

const StyledContainer = styled.div`
  padding-left: 80px;
  padding-right: 80px;
`;

const Container = styled.div`
  background-color: ${COLOR.SANDY_BEIGE};
  position: relative;
`;

const Row = styled.div`
`;

const StyledColumn = styled.div`
`;

const StyledContainer2 = styled.div`
  background-color: ${COLOR.SANDY_BEIGE}; 
  border-radius: 0.6rem;
`;

const H2 = styled.div`
  font-family: ${FONTFAMILIES.TT_INTERFACES};
  font-weight: normal;
  font-style: normal;
  font-size: 46px;
  padding-top: 2rem;
`;

const StyledHeader = styled.div`
  text-align: center;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  width: 100%;
  text-align: left;
  background: none;
`;

const Label = styled.div`
  border: none;
  padding: 2rem;
`;

const P = styled.p`
  font-family: ${FONTFAMILIES.TT_INTERFACES};
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1.3;
  color: rgb(40, 38, 41);
  border: none;
  background-color: rgb(255, 255, 255);
  padding: 2.2rem 8.2rem 2.2rem 4rem;
`;

const H4 = styled.h4`
  font-family: ${FONTFAMILIES.TT_INTERFACES};
  font-weight: normal;
  font-style: normal;
  font-size: 16px;
  line-height: 1.3;
  color: rgb(40, 38, 41);
  background-color: rgb(255, 255, 255);
  padding: 2.2rem 15.2rem 2.2rem 4rem;
  width: 1200px;

`;

const Icon = styled.h4`
  fill: rgb(63, 142, 252);
  // transition: all 0.3s cubic-bezier(0.45, 0, 0.55, 1) 0s;
  // position: absolute;
  // justify-content: flex-end;
  border: none;
  cursor: pointer;
  // display: inline-block;
  height: 30px;
  width: 30px;
  // line-height: 1;
  position:relative;
  float: right;
  bottom: 2.3rem;
  transform: rotate(180deg);
`;
export default Solution;
