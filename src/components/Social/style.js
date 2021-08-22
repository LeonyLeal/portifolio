import styled from 'styled-components'

import FacebookSVG from '../../img/facebook.svg'
import FacebookFillSVG from '../../img/facebookFill.svg'
import FigmaSVG from '../../img/figma.svg'
import FigmaFillSVG from '../../img/figmaFill.svg'
import GithubSVG from '../../img/github.svg'
import GithubFillSVG from '../../img/githubFill.svg'
import InstagramSVG from '../../img/instagram.svg'
import InstagramFillSVG from '../../img/instagramFill.svg'
import LinkedinSVG from '../../img/linkedin.svg'
import LinkedinFillSVG from '../../img/linkedinFill.svg'
import TwitterSVG from '../../img/twitter.svg'
import TwitterFillSVG from '../../img/twitterFill.svg'
import { colors } from '../../styles/GlobalStyles'

export const SocialContainer = styled.section`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SocialWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const SociaLink = styled.a`
  padding: 0 2em;
  width: 40px;
  height: 30px;
  cursor: pointer;
  background-position: start center;
  background-repeat: no-repeat;
  color: ${colors.Secondary};
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0.3em 1em;
  transition: all 0.5s ease-in-out;

  &:nth-child(1) {
    background-image: url(${FacebookSVG});

    :hover {
      background-image: url(${FacebookFillSVG});
    }
  }
  &:nth-child(2) {
    background-image: url(${FigmaSVG});
    :hover {
      background-image: url(${FigmaFillSVG});
    }
  }
  &:nth-child(3) {
    background-image: url(${GithubSVG});
    :hover {
      background-image: url(${GithubFillSVG});
    }
  }
  &:nth-child(4) {
    background-image: url(${InstagramSVG});
    :hover {
      background-image: url(${InstagramFillSVG});
    }
  }
  &:nth-child(5) {
    background-image: url(${LinkedinSVG});
    :hover {
      background-image: url(${LinkedinFillSVG});
    }
  }
  &:nth-child(6) {
    background-image: url(${TwitterSVG});
    :hover {
      background-image: url(${TwitterFillSVG});
    }
  }
`
