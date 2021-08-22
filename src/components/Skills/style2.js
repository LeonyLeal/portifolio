import styled, { keyframes } from "styled-components"

import { colors } from "../../styles/GlobalStyles"

import cardRedSVG from '../../img/card_red.svg'
import cardGreenSVG from '../../img/card_green.svg'
import cardBlueSVG from '../../img/card_blue.svg'
import cardPurpleSVG from '../../img/card_purple.svg'
import htmlSVG from '../../img/html.svg'
import designSVG from '../../img/design.svg'
import mobileSVG from '../../img/mobile.svg'
import reactSVG from '../../img/react.svg'


//Keyframe Animations
const InOut = keyframes`
0%{
    height: 0;
    width: 100%;
    border-radius:1em;
}
100%{
    height: 100%;
    width: 100%;
    z-index:-100;
    border-radius:1em;
}
`

const OutIn = keyframes`
0%{
    height: 100%;
    width: 100%;
    z-index:-100;
    border-radius:1em;
}
100%{
    height: 0;
    width: 100%;
   
}
`

const FadeIn = keyframes`
0%{
opacity: 0;
}
100%{
opacity: 1;
}
`

export const SkillsContainer = styled.section`
  min-height: 100vh;
`

export const CardWrapper = styled.div`
  display: grid;
  justify-content: center;

  margin: 0 auto;

  width: fit-content;

  background: #505050;
  border-radius: 1em;
  @media (min-width: 1400px) {
    padding: 0;
  }
`
export const Card = styled.div`
  display: flex;
  word-wrap: break-word;
  justify-content: flex-end;
  background: ${colors.Primary};
  width: 17.18em;
  height: 28.12em;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  margin: 3em;
  border-radius: 1em;
  @media (min-width: 1100px) {
    margin: 1em;
    grid-row: 1/4;
  }

  &#card:nth-child(1){background: url(${cardRedSVG})    no-repeat bottom center,${colors.Primary};}
    &#card:nth-child(2){background: url(${cardGreenSVG})  no-repeat bottom center,${colors.Primary};}
    &#card:nth-child(3){background: url(${cardBlueSVG})   no-repeat bottom center,${colors.Primary};}
    &#card:nth-child(4){background: url(${cardPurpleSVG}) no-repeat bottom center,${colors.Primary};}

    &#card:nth-child(1){>#Slider{background:${colors.CardRed};}}
    &#card:nth-child(2){>#Slider{background:${colors.CardGreen};}}
    &#card:nth-child(3){>#Slider{background:${colors.CardBlue};}}
    &#card:nth-child(4){>#Slider{background:${colors.CardPurple};}}

    &#card:nth-child(1){>#Svg{background:url(${htmlSVG}) no-repeat center center,${colors.Primary};box-shadow: 0px 0px 5px 4px ${colors.DarkRed};}}
    &#card:nth-child(2){>#Svg{background:url(${designSVG}) no-repeat center center,${colors.Primary};box-shadow: 0px 0px 5px 4px ${colors.DarkGreen};}}
    &#card:nth-child(3){>#Svg{background:url(${mobileSVG}) no-repeat center center,${colors.Primary};box-shadow: 0px 0px 5px 4px ${colors.DarkBlue};}}
    &#card:nth-child(4){>#Svg{background:url(${reactSVG}) no-repeat center center,${colors.Primary};box-shadow: 0px 0px 5px 4px ${colors.DarkPurple};}}



  :hover {
    >#Slider {
      margin: 0;
      animation: ${InOut} 300ms forwards;
      z-index: -100;
    }
    >#Svg{animation:${FadeIn} 300ms forwards }

    &#card:nth-child(1){>#Svg{background:url(${htmlSVG}) no-repeat center center,${colors.Primary};box-shadow: 0px 0px 5px 4px ${colors.DarkRed};}}
    &#card:nth-child(2){>#Svg{background:url(${designSVG}) no-repeat center center,${colors.Primary};box-shadow: 0px 0px 5px 4px ${colors.DarkGreen};}}
    &#card:nth-child(3){>#Svg{background:url(${mobileSVG}) no-repeat center center,${colors.Primary};box-shadow: 0px 0px 5px 4px ${colors.DarkBlue};}}
    &#card:nth-child(4){>#Svg{background:url(${reactSVG}) no-repeat center center,${colors.Primary};box-shadow: 0px 0px 5px 4px ${colors.DarkPurple};}}


    >#Description {
      z-index: 100;
    }
  }
`

export const Slider = styled.div`
  background-color: #505050;
  
  width: 100%;
  height: 0;
  z-index: -1;
  animation: ${OutIn} 300ms forwards;
`

export const Svg = styled.div`
position: absolute;
  background-color: #505050;
  margin-bottom: 21.1em;
  width: 6em;
  height: 6em;
  border-radius: 100%;
  z-index: 1;
 
`

export const Description = styled.p`
  position: absolute;
  max-width: 13em;
  text-align: center;
  z-index: 100;
  margin: 3.85em 0;
`
