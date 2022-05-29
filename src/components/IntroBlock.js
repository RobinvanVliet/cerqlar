import React from "react";
import './IntroBlock.css';
import orb from './background.webp';
import styled from 'styled-components';
import { COLOR } from '../theme/basics/colors';

function IntroBlock(){
  return(
    <>
    <IntroBlockContainer>
    <OrbContainer>
      <Orb>
        <img className='orb' src={orb} alt='Logo' loading='lazy'></img>
      </Orb>
   </OrbContainer>
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

export default IntroBlock;