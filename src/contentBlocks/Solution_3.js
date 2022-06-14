import React, { Component } from "react";
import { createClient } from "contentful";
import {BrowserRouter, Route, Link} from 'react-router-dom'
import styled from 'styled-components';
import { COLOR } from "../theme/basics/colors";
import { FONTFAMILIES } from '../theme/basics/font';
import { IconTM1 } from "../icons/Icon_trademanagement_1";
import contractscaptures from '../img/contractscaptures.webp';

class Homepage3 extends Component {
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
      <Container ref={this.container}>
        <Row>
          <StyledColumn>
            <StyledHeader>
              <H2>
              Frequently Asked Questions:
              </H2>
            </StyledHeader>
          </StyledColumn>
      
        <SliderContainer ref={this.container}>
          <Row2>
            <StyledColumn2>
              <TitleH2>
              <Button>
              <button type="button" class="button" onClick={this.handleButtonClick}>
                How quick Is the onboarding?
              </button>
              </Button>
            {this.state.open && (
              <Dropdown>
              <DropdownUl>
                <DropdownLi>
                Once you've received an invitation to join the CerQlar platform, you can get ready to capture trades quickly by:
                </DropdownLi>
              </DropdownUl>
              </Dropdown>
              )}
              </TitleH2>
            
              

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
  font-family: "TT Interfaces", Arial, sans-serif;
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
  font-family: "TT Interfaces";
  font-weight: 600;
  color: rgb(255, 255, 255);
  cursor: pointer;
  position: relative;
  text-align: center;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px auto;
  // width: 5.5rem;
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
  font-family: ${FONTFAMILIES.N};
  font-size: 16px;
`;

const TextSpanSecond = styled.span`
  color: ${COLOR.DARK_GREY};
  font-family: "Neue Haas Grotesk", Verdana, sans-serif;
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

const Button = styled.button`
  padding: 0;
  width: 50px;
  border: 0;
  background-color: red;
  color: #333;
  cursor: pointer;
  outline: 0;
  font-size: 40px;
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 300px;
  z-index: 2;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
`;

const DropdownUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DropdownLi = styled.li`
  padding: 8px 12px;
`;


export default Homepage3;
