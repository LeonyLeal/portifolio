import styled, { keyframes } from 'styled-components';

//Styles
const InOut = keyframes`
   0%{
      padding-bottom: 2em;
       height: 6em;
       width: 6em;
       border-radius: 50%;
      
   }
   100%{
       height: 100%;
       width: 100%;
       z-index: 1;
       border-radius:1em;
   }
   `

const OutIn = keyframes`
    0%{
      height: 100%;
        width: 100%;
        z-index:1;
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
   transform: translate(0, -1em)
   }
   `

const FadeOut = keyframes`
   0%{
   transform: translate(0, -1em);
   }
   100%{
   transform: translate(0);
   }
   `

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  word-wrap: break-word;
  width: 17.18em;
  height: 28.12em;
  flex-direction: column;
  z-index: 1;
  margin: 3em 0.7em;
  border-radius: 1em;
  border: 2px solid ${props => props.theme.colors.secondary};
  background: url(${(props) => props.wave}) no-repeat bottom center,
   #202020;

  :hover {
    > #background {
      margin: 0;
      animation: ${InOut} 300ms forwards;
      z-index: 1;
    }
    > #svg {
      box-shadow: 0px 0px 5px 4px ${(props) => props.shadow_hover};
      animation: ${FadeIn} 300ms forwards;
    }
  }
`

export const Circle = styled.div`
  margin-top: 2em;
  width: 6em;
  height: 6em;
  border-radius: 100%;
  z-index: 1;
  animation: ${OutIn} 300ms forwards;
  background: ${(props) => props.card_fill};
`

export const Svg = styled.div`
  position: absolute;
  margin-top: 2em;
  width: 6em;
  height: 6em;
  border-radius: 100%;
  z-index: 1;
  animation: ${FadeOut} 300ms forwards;
  background: url(${(props) => props.icon}) no-repeat center center,
    #151515;
  box-shadow: 0px 0px 5px 4px ${(props) => props.shadow};
`

export const Description = styled.p`
  position: absolute;
  margin: 15em 0;
  max-width: 15em;
  border-radius: 5px;
  background-color: rgba(0,0,0,0.1);
  color: #f2f2f2;
  z-index: 100;
  text-align: center;
  user-select: none;
`
