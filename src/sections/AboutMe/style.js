import styled, { keyframes } from 'styled-components'


const BubblesAni = keyframes`
 0% {
    opacity: 0.2;
    visibility: visible;
}
 10% {
    opacity: 0.5;
    visibility: visible;
}
20%{
    opacity: 0.8;
}
30%{
    opacity: 1;
}

80%{
    opacity: 0.6;
}
97%{
    opacity: 0.0;
}
100% {
    bottom: 90%;
    opacity: 0.0;
}
`
const sideWays = keyframes`
       0% { 
        margin:0 0em;
    }
    100% { 
        margin:0 3em;
    }
`

export const Bubbles = styled.div`
  display: flex;
  min-height: 30.5em;
  max-height: 33.5em;
  top: 30%;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  overflow: hidden;
  z-index: 1;

  @media(min-width:600px){
      min-height:29em;
  }
`

export const Bubble = styled.div`
  height: 3em;
  width: 3em;
  position: absolute;
  border-radius: 100%;
  background: ${props => props.theme.colors.bubble};
  opacity: 1;
  animation: ${BubblesAni} 6s linear infinite,
    ${sideWays} 1s ease-in-out alternate infinite;

  &#Bubble:nth-child(1) {
    height: 1.5em;
    width: 1.5em;

    bottom: -10%;
    left: 5%;
    animation-delay: 0.3s;
    @media (min-width: 600px) {
      left: 15%;
    }
  }
  &#Bubble:nth-child(2) {
    visibility: hidden !important;

    height: 1em;
    width: 1em;

    bottom: -25%;
    left: 15%;
    animation-delay: 0.6s;

    @media (min-width: 600px) {
      visibility: visible !important;
    }
  }
  &#Bubble:nth-child(3) {
    height: 2.5em;
    width: 2.5em;

    bottom: -10%;
    left: 15%;
    animation-delay: 1.4s;
    @media (min-width: 600px) {
      left: 30%;
    }
  }
  &#Bubble:nth-child(4) {
    visibility: hidden !important;
    height: 1.4em;
    width: 1.4em;

    bottom: -5%;
    left: 30%;
    animation-delay: 1s;

    @media (min-width: 600px) {
      visibility: visible;
    }
  }
  &#Bubble:nth-child(5) {
    visibility: hidden !important;

    height: .9em;
    width: .9em;

    bottom: -30%;
    left: 50%;
    animation-delay: 0.7s;
    @media (min-width: 600px) {
      visibility: visible !important;
    }
  }
  &#Bubble:nth-child(6) {
    height: 1.8em;
    width: 1.8em;

    bottom: -7%;
    left: auto;
    right: 40%;
    animation-delay: 1.2s;
    @media (min-width: 600px) {
      right: 30%;
    }
  }
  &#Bubble:nth-child(7) {
    visibility: hidden !important;

    height: 4em;
    width: 4em;

    bottom: -15%;
    left: auto;
    right: 25%;
    animation-delay: 4s;
    @media (min-width: 600px) {
      visibility: visible !important;
    }
  }
  &#Bubble:nth-child(8) {
    height: 1.6em;
    width: 1.6em;

    bottom: -8%;
    left: auto;
    right: 5%;
    animation-delay: 6s;
    @media (min-width: 600px) {
      right: 15%;
    }
  }
  &#Bubble:nth-child(9) {
    visibility: hidden !important;
    height: 1em;
    width: 1em;

    right: 15%;
    bottom: -50%;
    animation-delay: 2s;

    @media (min-width: 600px) {
      visibility: visible !important;
    }
  }
`

export const AboutMeWrapper = styled.div`
  position: relative;
  z-index: 10;
  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
`

export const Background = styled.div`
  background: ${props => props.theme.colors.aboutMeBackground};
  background-size: cover;
  text-align: center;
  background-position: center center;
`

export const Carousel = styled.p`
  margin: 0 auto;
  padding-bottom: 1em;
  font-weight: lighter;
  font-size: 2rem;
  animation: all 1s ease-in-out;
  user-select: none;
`

export const Content = styled.div`
  margin: 0 auto;
  @media (min-width: 600px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: flex-start;
  }
`

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-content: stretch;
  min-height: fit-content;
  margin-top: 5em;
`

export const MeWrapper = styled.div`
  min-height: 100vh;

  @media (min-width: 600px) {
    display: flex;
  }
`

export const Name = styled.h1`
  z-index: 10;
  padding: 1.5em 0;
  padding-bottom: 0;
  text-align: start;
  align-items: center;
  font-size: 2rem;
  font-weight: 400;
  font-style: italic;

  @media (min-width: 600px) {
    padding-top: 1.5em;
    text-align: center;
    padding-right: 40%;
  }
`
export const Profile = styled.img` 
  min-width: 150px;
  max-height: auto;
  border-radius: 1.3em;
  border: 5px solid ${props => props.theme.colors.primary};
  user-select: none;
  margin-right: 1em;

  @media (min-width: 950px) {
    max-width: auto;
    max-height: 375px;
    margin-right: 0;
  }
`

export const ProfileWrapper = styled.div`
  @media (min-width: 600px) {
    width: fit-content;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-end;
    align-items: center;
  }
`

export const TextWrapper = styled.div`
  @media (min-width: 600px) {
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    align-items: flex-end;
    justify-content: center;
    flex-wrap: wrap;
  }
`
