import React from "react";
import { Button } from "../Button";
import {
  SectionElement,
  SectionContainer,
  TextWrapper,
  TopLineText,
  Heading,
  TextDescription,
  SvgImg,
  Img,
  Column1,
  Column2,
  ButtonWrapper,
} from "./sectionElements";

const Section = ({
  id,
  startImg,
  darkBg,
  src,
  topText,
  heading,
  description,
  btnText,
  primary,
}) => {
  return (
    <SectionElement id={id} darkBg={darkBg}>
      <SectionContainer startImg={startImg} darkBg={darkBg}>
        <Column1>
          <TextWrapper>
            <TopLineText>{topText}</TopLineText>
            <Heading darkBg={darkBg}>{heading}</Heading>
            <TextDescription darkBg={darkBg}>{description}</TextDescription>
          </TextWrapper>
          <ButtonWrapper
            to="home"
            duration={500}
            spy={true}
            smooth={true}
            exact={`${true}`}
            offset={-80}
          >
            <Button to="home" big={false} primary={primary} offset={-80}>
              {btnText}
            </Button>
          </ButtonWrapper>
        </Column1>
        <Column2>
          <SvgImg>
            <Img src={src} />
          </SvgImg>
        </Column2>
      </SectionContainer>
    </SectionElement>
  );
};

export default Section;
