import React from "react";
import './IntroBlock.css';
import orb from './background.webp';
import styled from 'styled-components';
import { COLOR } from '../theme/basics/colors';

import transparent from '../img/transparant.webp';



function IntroBlock(){
  return(
    <>
    <IntroBlockContainer>
    <OrbContainer>
      <Orb>
        <img className='orb' src={orb} alt='Logo' loading='lazy'></img>
      </Orb>
   </OrbContainer>

      <Row>
        <StyledColumn>
        <Text>Solution overview</Text>
        </StyledColumn>
        <StyledColumn>
        <Text><img className='logoContainer' src={transparent} alt='Logo' loading='lazy'></img></Text>
        </StyledColumn>
      </Row>

    </IntroBlockContainer>
    </>
  )
}

const IntroBlockContainer = styled.div`
  background-color: ${COLOR.GRASS_GREEN};
  overflow: hidden;
  position: relative;
  padding: 10.4rem 0px 5.6rem;
`;

const OrbContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 0;
  padding-bottom: 80%;
  transform: translate(-25%, -50%);
`;

const Orb = styled.div`
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  width: 0px;
  height: 0px;
`;


const Row = styled.div`
  -webkit-box-align: center;
  align-items: center;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  
`;

const Text = styled.div`
  z-index: 1;
  color: white;
  position: relative;
  font-family: "TT Interfaces", Arial, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 56px;
`;

const StyledColumn = styled.div`
  // padding: calc(30px);
  margin-left: auto;
  margin-right: auto;
`;

export default IntroBlock;