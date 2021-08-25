import styled, { keyframes } from 'styled-components'

import cardRedSVG    from '../../img/cards/card_red.svg'
import cardGreenSVG  from '../../img/cards/card_green.svg'
import cardBlueSVG   from '../../img/cards/card_blue.svg'
import cardPurpleSVG from '../../img/cards/card_purple.svg'
import htmlSVG       from '../../img/cards/html.svg'
import designSVG     from '../../img/cards/design.svg'
import mobileSVG     from '../../img/cards/mobile.svg'
import reactSVG      from '../../img/cards/react.svg'

import {colors} from '../../styles/GlobalStyles'


//Keyframe Animations
const InOut = keyframes`
0%{
    height: 6em;
    width: 6em;
    border-radius: 50%;
   
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
    height: 6em;
    width: 6em;
    border-radius: 50%;
}
`

const FadeIn = keyframes`
0%{
opacity: 0;
}
100%{
opacity: 1;
transform: translate(0, .5em)
}
`
const FadeOut = keyframes`
0%{
transform: translate(0, .5em);
}
100%{
transform: translate(0);
}
`

export const SkillsContainer = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
`

export const Slide = styled.div `
width: 21em;
overflow: hidden;


 #slides > div {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  scroll-snap-align: center;
  flex-shrink: 0;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 500ms;
}
`

export const SlideButton = styled.div `
position: absolute;
width: 1.5em;
height: 1.5em;
background: transparent;
border: solid .06em white;
border-radius: 100%;
text-align: center;
z-index: 100;
cursor: pointer;
user-select: none;
:first-child{
  margin: 14.06em ;
  margin-left: .2em;
}

:nth-child(2){
  margin: 14.06em 0;
  margin-left:19.2em;
}

`

export const CardWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar{
        height: 0px;
    }
  
`


export const Card = styled.div`
  word-wrap: break-word;
  width: 17.18em;
  height: 28.12em;
  flex-direction: column;
  z-index: 1;

  margin: 3em;
  border-radius: 1em;
//  @media (min-width: 1100px) {
//    margin: 1em;
//    grid-row: 1/4;
//  }

    &#card:nth-child(1){background: url(${cardRedSVG})    no-repeat bottom center, ${colors.Test};}
    &#card:nth-child(2){background: url(${cardGreenSVG})  no-repeat bottom center, ${colors.Test};}
    &#card:nth-child(3){background: url(${cardBlueSVG})   no-repeat bottom center, ${colors.Test};}
    &#card:nth-child(4){background: url(${cardPurpleSVG}) no-repeat bottom center, ${colors.Test};}

    &#card:nth-child(1){>#background{background: ${colors.CardRed};}}
    &#card:nth-child(2){>#background{background: ${colors.CardGreen};}}
    &#card:nth-child(3){>#background{background: ${colors.CardBlue};}}
    &#card:nth-child(4){>#background{background: ${colors.CardPurple};}}

    &#card:nth-child(1){>#svg{background: url(${htmlSVG})   no-repeat center center, ${colors.Primary}; box-shadow: 0px 0px 5px 4px ${colors.BorderRed};}}
    &#card:nth-child(2){>#svg{background: url(${designSVG}) no-repeat center center, ${colors.Primary}; box-shadow: 0px 0px 5px 4px ${colors.BorderGreen};}}
    &#card:nth-child(3){>#svg{background: url(${mobileSVG}) no-repeat center center, ${colors.Primary}; box-shadow: 0px 0px 5px 4px ${colors.BorderBlue};}}
    &#card:nth-child(4){>#svg{background: url(${reactSVG})  no-repeat center center, ${colors.Primary}; box-shadow: 0px 0px 5px 4px ${colors.BorderPurple};}}


  :hover {
    >#Background {
      margin: 0;
      animation: ${InOut} 300ms forwards;
      z-index: -100;
    }
    >#Svg{animation:${FadeIn} 300ms forwards }
    &#card:nth-child(1){>#svg{background: url(${htmlSVG})   no-repeat center center, ${colors.Primary}; box-shadow: 0px 0px 5px 4px ${colors.DarkRed};}}
    &#card:nth-child(2){>#svg{background: url(${designSVG}) no-repeat center center, ${colors.Primary}; box-shadow: 0px 0px 5px 4px ${colors.DarkGreen};}}
    &#card:nth-child(3){>#svg{background: url(${mobileSVG}) no-repeat center center, ${colors.Primary}; box-shadow: 0px 0px 5px 4px ${colors.DarkBlue};}}
    &#card:nth-child(4){>#svg{background: url(${reactSVG})  no-repeat center center, ${colors.Primary}; box-shadow: 0px 0px 5px 4px ${colors.DarkPurple};}}


    >#Description {
      z-index: 100;
    }
  }
`

export const Background = styled.div`
  margin-top: 1em;
  width: 6em;
  height: 6em;
  border-radius: 100%;
  z-index: -1;
  animation: ${OutIn} 300ms forwards;
`

export const Svg = styled.div`
  position: absolute;
  background: ${colors.Primary};
  margin-top: 1em;
  width: 6em;
  height: 6em;
  border-radius: 100%;
  z-index: 1;
  animation: ${FadeOut} 300ms forwards;
`

export const Description = styled.p`
  position: absolute;
  margin: 16em 0;
  max-width: 13em;
  z-index: 100;
  text-align: center;
  user-select: none;
`







/*
display: grid;
justify-content: center;

margin: 0 auto;

width: fit-content;

//background: #505050;
border-radius: 1em;
@media (min-width: 1400px) {
  padding: 0;
}




//


@media (min-width: 1100px) {
    margin: 1em;
    grid-row: 1/4;
  }
  */