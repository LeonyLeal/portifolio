import React from "react";
import { Title } from "../../styles/GlobalStyles";

import { SocialContainer, SociaLink, SocialWrapper } from "./style";

function Socials() {
  return (
    <SocialContainer id="Section-B">
      <Title>Socials</Title>
      <SocialWrapper>
        <SociaLink
          id="social"
          target="_blank"
          href="https://www.facebook.com/Leony9991/"
        >
          Facebook
        </SociaLink>
        <SociaLink
          id="social"
          target="_blank"
          href="https://www.figma.com/@leony"
        >
          Figma
        </SociaLink>
        <SociaLink
          id="social"
          target="_blank"
          href="https://www.github.com/LeonyLeal"
        >
          Github
        </SociaLink>
        <SociaLink
          id="social"
          target="_blank"
          href="https://www.instagram.com/leony.1999/"
        >
          Instagram
        </SociaLink>
        <SociaLink
          id="social"
          target="_blank"
          href="https://www.linkedin.com/in/leony-leal99/"
        >
          Linkedin
        </SociaLink>
        <SociaLink
          id="social"
          target="_blank"
          href="https://twitter.com/Leony_1999"
        >
          Twitter
        </SociaLink>
      </SocialWrapper>
    </SocialContainer>
  );
}

export default Socials;
