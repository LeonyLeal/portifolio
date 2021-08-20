import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
::-webkit-scrollbar{
        width: 10px;
    }

::-webkit-scrollbar-track {
    background: rgba(37, 37, 37, 0.0);
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 25px;
}

::-webkit-scrollbar-thumb:hover {
  background: #f2f2f2;
}

::-webkit-scrollbar-thumb:scroll {
  background: #f2f2f2;
}

html{
  scroll-behavior: smooth;
}

body{
    box-sizing: border-box;
    font-family: "Nunito";
    margin: 0;
    background-color: #252525;
    color: #f2f2f2;
    overflow-x: hidden;
    scroll-behavior: smooth;
    overflow-y: overlay;
   
}
`

export const Title = styled.h1`
  text-align: center;
  font-weight: 500;

  @media (min-width: 600px) {
    font-size: 2.5rem;
  }
`

export const Span = styled.p`
  font-size: small;
  text-align: end;
  padding-right: 1em;
  font-weight: 400;

  @media (min-width: 600px) {
    font-size: 1rem;
  }
`

export const Text = styled.p`
  font-weight: 400;
  padding: 0 0.3em;
  text-align: center;
  font-size: 1rem;

  @media (min-width: 600px) {
    font-size: 1.4rem;
    max-width: 30em;
  }
`

export default GlobalStyles
