import React, { useState } from "react";
import video from "../../videos/video.mp4";
import {
  HeadingWrapper,
  HeadingBg,
  VideoBg,
  HeadingContent,
  HeadingTitle,
  HeadingP,
  RightArrow,
  ForwardArrow,
  ButtonWrapper,
} from "./headingComponents";

import { Button } from "../Button";

const Heading = () => {
  const [isHoved, setIsHoved] = useState(false);

  const onHover = () => {
    setIsHoved(!isHoved);
  };

  return (
    <HeadingWrapper id="home">
      <HeadingBg>
        <VideoBg muted loop autoPlay src={video} type="video/mp4" />
      </HeadingBg>

      <HeadingContent>
        <HeadingTitle>Virtual Banking Made Easy</HeadingTitle>
        <HeadingP>
          Sign up for a new account today and receive $250 in credit towards
          your next payment.
        </HeadingP>
        <ButtonWrapper
          to="signup"
          offset={-80}
          duration={800}
          spy={true}
          smooth={true}
        >
          <Button primary={true} onMouseEnter={onHover} onMouseLeave={onHover}>
            Get Started {isHoved ? <RightArrow /> : <ForwardArrow />}
          </Button>
        </ButtonWrapper>
      </HeadingContent>
    </HeadingWrapper>
  );
};

export default Heading;
