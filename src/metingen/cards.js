import React from "react";
import styled from 'styled-components';

// Icons
import { Icon1 } from "../../icons/Icon1";
import { Icon2 } from "../../icons/Icon2";
import { Icon3 } from "../../icons/Icon3";
import { Icon4 } from "../../icons/Icon4";
import { Icon5 } from "../../icons/Icon5";
import { Icon6 } from "../../icons/Icon6";

function Cards(){
  return(
    <>
    <Container>
      <Section>
        <Card COLORS={COLORS.LIGHT_PURPLE}>
        <ContentContainer>
          <Icon>
            <Icon1/>
          </Icon>
          <Title FONTFAMILIES={FONTFAMILIES.POPPINS} COLORS={COLORS.NIGHT_BLACK} LINEHEIGHT={LINEHEIGHT.HEADING_01}>Uses Client First</Title>
          <Text FONTFAMILIES={FONTFAMILIES.ARIMO} COLORS={COLORS.NIGHT_BLACK} LINEHEIGHT={LINEHEIGHT.HEADING_06} >Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </Text>
        </ContentContainer>
        </Card>
      
        <Card COLORS={COLORS.LAVENDER_PURPLE}>
        <ContentContainer>
          <Icon>
            <Icon2/>
          </Icon>
          <Title FONTFAMILIES={FONTFAMILIES.POPPINS} COLORS={COLORS.NIGHT_BLACK} LINEHEIGHT={LINEHEIGHT.HEADING_01}>Two Free Revision Round</Title>
          <Text FONTFAMILIES={FONTFAMILIES.ARIMO} COLORS={COLORS.NIGHT_BLACK} LINEHEIGHT={LINEHEIGHT.HEADING_06}>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </Text>
        </ContentContainer>
        </Card>

        <Card COLORS={COLORS.FRESH_PURPLE}>
        <ContentContainer>
          <Icon>
            <Icon3/>
          </Icon>
          <Title FONTFAMILIES={FONTFAMILIES.POPPINS} COLORS={COLORS.NIGHT_BLACK} LINEHEIGHT={LINEHEIGHT.HEADING_01}>Template Customization</Title>
          <Text FONTFAMILIES={FONTFAMILIES.ARIMO} COLORS={COLORS.NIGHT_BLACK} LINEHEIGHT={LINEHEIGHT.HEADING_06}>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </Text>
        </ContentContainer>
        </Card> 
      </Section>

      <Section>
      <Card COLORS={COLORS.LIGHT_BLUE}>
          <ContentContainer>
            <Icon>
              <Icon4/>
            </Icon>
            <Title FONTFAMILIES={FONTFAMILIES.POPPINS} COLORS={COLORS.NIGHT_BLACK} LINEHEIGHT={LINEHEIGHT.HEADING_01}>24/7</Title>
            <Text FONTFAMILIES={FONTFAMILIES.ARIMO} COLORS={COLORS.NIGHT_BLACK} LINEHEIGHT={LINEHEIGHT.HEADING_06}>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </Text>
          </ContentContainer>
        </Card>

        <Card COLORS={COLORS.BABY_BLUE}>
          <ContentContainer>
            <Icon>
              <Icon5/>
            </Icon>
            <Title FONTFAMILIES={FONTFAMILIES.POPPINS} COLORS={COLORS.NIGHT_BLACK} LINEHEIGHT={LINEHEIGHT.HEADING_01}>Quick Delivery</Title>
            <Text FONTFAMILIES={FONTFAMILIES.ARIMO} COLORS={COLORS.NIGHT_BLACK} LINEHEIGHT={LINEHEIGHT.HEADING_06}>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </Text>
          </ContentContainer>
        </Card>

        <Card COLORS={COLORS.SKY_BLUE}>
        <ContentContainer>
            <Icon>
              <Icon6/>
            </Icon>
            <Title FONTFAMILIES={FONTFAMILIES.POPPINS} COLORS={COLORS.NIGHT_BLACK} LINEHEIGHT={LINEHEIGHT.HEADING_01}>Hands-on approach</Title>
            <Text FONTFAMILIES={FONTFAMILIES.ARIMO} COLORS={COLORS.NIGHT_BLACK} LINEHEIGHT={LINEHEIGHT.HEADING_06}>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </Text>
          </ContentContainer>
        </Card>
      </Section>
    </Container>
    </>
  )
}

const Container = styled.div`
  margin-bottom: 4rem;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const Card = styled.div`
  margin-top: 10px;
  width: 28%;
  height: 280px;
  background-color: ${props => props.COLORS};
`;

const ContentContainer = styled.div`
  padding-left: 2rem;
`;

const Icon = styled.div`
  padding-top: 2.2rem;
`;

const Title = styled.div`
  font-family: ${props => props.FONTFAMILIES};
  color: ${props => props.COLORS};
  line-height: ${props => props.LINEHEIGHT};
  font-family: "Poppins";
  font-weight: medium;
  font-size: 24px;
  padding-bottom: 1rem;
  padding-top: 1rem;
`;

const Text = styled.div`
  font-family: ${props => props.FONTFAMILIES} 
  font-size: 16px;
  padding-right: 2rem;
  line-height: ${props => props.LINEHEIGHT};
`;

const COLORS = {
  LIGHT_PURPLE: "#E8E0FF",
  LAVENDER_PURPLE: "#CED0FF",
  FRESH_PURPLE: "#E4ECFF",
  LIGHT_BLUE: "#EAF5FF",
  BABY_BLUE: "#D9EDFF",
  SKY_BLUE: "#BBD2FF",
  NIGHT_BLACK: "#282938",
}

const FONTFAMILIES = {
  POPPINS: "Poppins",
  ARIMO: "Arimo",
}

const LINEHEIGHT = {
  HEADING_01: "38px",
  HEADING_06: "28px", 
}

const FONTWEIGHTS = {
  POPPINS_01: "Semibold",
  POPPINS_02: "Medium",
  ARIMO_01: "Regular",
}


export default Cards;