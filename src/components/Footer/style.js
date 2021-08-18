import styled, { keyframes } from 'styled-components'

const BubblesAni = keyframes`
 0% {
    bottom: -1.5em;
    opacity: 0;
    visibility: visible;
}
 10% {
    bottom: -1.5em;
    opacity: 0;
    visibility: visible;
}
30%{
    opacity: 1;
}
75%{
    opacity: 1;
}
80%{
    opacity: 0.6;
}
97%{
    opacity: 0;
}
100% {
    bottom: 90%;
    opacity: 0;
}
`
const sideWays = keyframes`
       0% { 
        margin-left:0em;
    }
    100% { 
        margin-left:3em;
    }
}
`

export const Bubbles = styled.div`
  position: absolute;
  width: 100%;
  height: 75%;
  overflow: hidden;
  top: 16%;
  z-index: 1;
  @media (min-width: 600px) {
    height: 60%;
    top: 30%;
  }
`

export const Bubble = styled.div`
  height: 3em;
  width: 3em;
  position: absolute;
  border-radius: 100%;
  background: radial-gradient(50% 50% at 50% 50%, #cc0092 0%, #ff4dcc 87.5%);
  opacity: 1;
  animation: ${BubblesAni} 5s linear infinite,
    ${sideWays} 0.9s ease-in-out alternate infinite;

  &#Bubble1 {
    bottom: -10%;
    left: 25%;
    @media (min-width: 600px) {
      bottom: 0%;
      left: 12%;
    }
  }
  &#Bubble2 {
    bottom: -10%;
    left: 25%;
    @media (min-width: 600px) {
      bottom: 0%;
      left: 25%;
    }
  }
  &#Bubble3 {
    bottom: -10%;
    left: 50%;
    @media (min-width: 600px) {
      bottom: 0%;
      left: 40%;
    }
  }
  &#Bubble4 {
    bottom: 0%;
    left: 80%;
    @media (min-width: 600px) {
      visibility: visible;
      bottom: 0%;
      left: 55%;
    }
  }
  &#Bubble5 {
    visibility: hidden;

    @media (min-width: 600px) {
      visibility: visible;
      bottom: 0%;
      left: 75%;
    }
  }
  &#Bubble6 {
    @media (min-width: 600px) {
      visibility: hidden;
      visibility: visible;
      bottom: 0%;
      left: 80%;
    }
  }
  &#Bubble7 {
    visibility: hidden;
    @media (min-width: 600px) {
      visibility: visible;
      bottom: 0%;
      left: 90%;
    }
  }
`

export const AboutMeWrapper = styled.div`
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
  background: linear-gradient(
    180deg,
    rgba(255, 0, 184, 0) 0%,
    #ff00b8 17.19%,
    #ff007a 80.73%,
    rgba(255, 0, 122, 0) 100%
  );
  background-size: cover;
  text-align: center;
  background-position: center center;
`

export const Carousel = styled.p`
  margin: 0;
  padding-bottom: 3em;
  font-weight: lighter;
  font-size: 2rem;
`

export const Content = styled.div`
  @media (min-width: 600px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: flex-start;
  }
`

export const ContentWrapper = styled.div`
  min-height: 80vh;

  > #Who {
    margin-top: 10%;
  }
`

export const MeWrapper = styled.div`
  min-height: 100vh;

  @media (min-width: 600px) {
    display: flex;
  }
`

export const Name = styled.h1`
  z-index: 10;

  padding: 1.5em;
  padding-bottom: 0;
  text-align: start;
  align-items: center;
  color: white;
  font-weight: 400;
  font-style: italic;

  @media (min-width: 600px) {
    padding-top: 1.5em;
    text-align: center;
    padding-right: 40%;
  }
`
export const Profile = styled.img`
  min-width: auto;
  max-width: 200px;
  border-radius: 1.5em;
  border: 5px solid #252525;

  @media (min-width: 600px) {
    max-width: auto;

    max-height: 362;
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
