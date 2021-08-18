import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
0%{
    opacity: 0.7;
}
100%{
    opacity: 1;
}
`

export const SkillsContainer = styled.section`
min-height: 100vh;
  margin: 10% 0;
  display: flex;
  flex-direction: column;
  align-content: stretch;
  align-items: stretch;
`

export const CardWrapper = styled.div`
  margin-top: 1em;
  padding: 1em;
  display: grid;
  align-self: center;
  border-radius: 25px;
  background: #505050;
  background-clip: border-box;
  justify-content: center;
`

export const Card = styled.div`
  display: flex;
  background-color: #444444;
  width: 275px;
  height: 450px;
  flex-direction: column;
  animation-name: ${fadeIn};
  animation-timing-function: ease-in-out;
  animation-duration: 0.3s;
  margin: 2em;
  border-radius: 1em;
  @media (min-width: 1100px) {
    grid-row: 1/4;
  }

  &#card-1 {
    :hover {
      animation-name: ${fadeIn};
      animation-timing-function: ease-in;
      animation-duration: 0.3s;
      background: linear-gradient(180deg, #ea3a46 0%, #bf323c 100%);
    }
  }
  &#card-2 {
    :hover {
      animation-name: ${fadeIn};
      animation-timing-function: ease-in-out;
      animation-duration: 0.3s;
      background: linear-gradient(180deg, #55baa3 0%, #44a891 100%);
    }
  }
  &#card-3 {
    :hover {
      animation-name: ${fadeIn};
      animation-timing-function: ease-in;
      animation-duration: 0.3s;
      background: linear-gradient(180deg, #27abee 0%, #228ec5 100%);
    }
  }
  &#card-4 {
    :hover {
      animation-name: ${fadeIn};
      animation-timing-function: ease-in;
      animation-duration: 0.3s;
      background: linear-gradient(180deg, #8765de 0%, #694cb3 100%);
    }
  }
`
