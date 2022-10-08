import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { Link as LinkS } from "react-scroll";

export const HeadingWrapper = styled.div`
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  padding: 0 20px;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
    z-index: 2;
  }
`;

export const HeadingBg = styled.div`
  background: #010606;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const HeadingContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  z-index: 10;
  max-width: 1100px;
  padding: 0 3em;
`;

export const HeadingTitle = styled.h1`
  font-size: 3.2rem;
  @media screen and (max-width: 768px) {
    font-size: 2.6rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const HeadingP = styled.p`
  color: #fff;
  font-size: 1.8rem;
  white-space: wrap;
  max-width: 800px;
  padding: 1.5em 0 1.8em;
  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 1.1rem;
    padding: 1.5em 0 1.7em;
  }
`;

export const ButtonWrapper = styled(LinkS)``;
export const RightArrow = styled(MdArrowForward)`
  color: #000;
  margin-left: 0.5em;
  width: 1.5em;
`;

export const ForwardArrow = styled(MdKeyboardArrowRight)`
  color: #000;
  font-size: 1.2em;
  margin-left: 0.5em;
`;
