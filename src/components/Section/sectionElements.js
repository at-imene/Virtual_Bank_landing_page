import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

var green = "#38a86e";

export const SectionElement = styled.section`
  display: flex;
  justify-content: center;
  background-color: ${({ darkBg }) => (darkBg ? `#010606` : "#fff")};
`;

export const SectionContainer = styled.div`
  width: 100%;
  height: 840px;
  max-width: 1200px;
  margin: 0 1.2em;
  display: grid;
  justify-content: space-between;
  grid-gap: 2em;
  align-items: center;
  grid-template-columns: minmax(auto, 1fr);
  background-color: ${({ darkBg }) => (darkBg ? `#010606` : "#fff")};
  grid-template-areas: ${({ startImg }) =>
    startImg ? `'img text'` : `'text img'`};

  @media screen and (max-width: 1100px) {
    grid-gap: 0;
    grid-template-columns: 1.2fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: minmax(auto, 1fr);

    grid-template-areas: ${({ startImg }) =>
      startImg ? `'img img' 'text text'` : `'text text' 'img img'`};
  }
`;

export const Column1 = styled.div`
  grid-area: text;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (max-width: 768px) {
    margin: auto;
  }
`;
export const Column2 = styled.div`
  grid-area: img;
`;

export const TextWrapper = styled.div`
  padding: 0 1.5em 0 0;
  max-width: 550px;
  width: 100%;
  margin: 0;

  @media screen and (max-width: 768px) {
    text-align: center;
    max-width: 550px;
  }
`;

export const TopLineText = styled.p`
  font-size: 1.2em;
  text-transform: uppercase;
  color: #38a86e;
  @media screen and (max-width: 768px) {
    font-size: 1;
  }
`;

export const Heading = styled.h1`
  font-size: 3.6em;
  line-height: 1em;
  padding: 0.1em 0;
  color: ${({ darkBg }) => (darkBg ? `#fff` : "#010606")};
  @media screen and (max-width: 1000px) {
    font-size: 3.2em;
  }
  @media screen and (max-width: 768px) {
    font-size: 3em;
  }
`;

export const TextDescription = styled.p`
  font-size: 1.4em;
  padding: 1em 0;

  line-height: 1em;
  color: ${({ darkBg }) => (darkBg ? `#fff` : "#010606")};
  @media screen and (max-width: 768px) {
    font-size: 1.2em;
  }
`;

export const ButtonWrapper = styled(LinkS)`
  align-content: flex-start;
  width: auto;
  padding-top: 15px;
  @media screen and (max-width: 768px) {
    margin: auto;
  }
`;

export const SvgImg = styled.div`
  max-width: 550px;
  height: 100%;
  padding-left: 1em 0 0 1.3em;
  @media screen and (max-width: 1000px) {
    max-width: 450px;
  }
  @media screen and (max-width: 768px) {
    margin: auto;
  }
`;

export const Img = styled.img`
  margin: 1em 0 10px 0;
  width: 100%;
`;
