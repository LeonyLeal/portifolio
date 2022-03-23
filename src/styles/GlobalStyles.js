import styled, { createGlobalStyle } from 'styled-components'

export const palette = {
  cards: {
    background: {
      red: 'linear-gradient(180deg, #EA3A46 0%, #BF323C 100%)',
      green: 'linear-gradient(180deg, #55BAA3 0%, #44A891 100%)',
      blue: 'linear-gradient(180deg, #27ABEE 0%, #228EC5 100%)',
      purple: 'linear-gradient(180deg, #8765DE 0%, #694CB3 100%)',
    },
    border: {
      red: '#EA3A46',
      green: '#55BAA3',
      blue: '#27ABEE',
      purple: '#8765DE',
      selectedRed: '#9A1F27',
      selectedGreen: '#137D66',
      selectedBlue: '#166C98',
      selectedPurple: '#5B409C',
    },
  },
}

export const fonts = {
  weight: {
    ExtraLight: '300',
    Light: '400',
    Normal: '500',
    Large: '600',
  },
  size: {
    UltraSmall: '1rem',
    small: '1.2rem',
    Normal: '1.4rem',
    Large: '2rem',
  },
}

export const GlobalStyles = createGlobalStyle`
::-webkit-scrollbar{
        width: 10px;
}

::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.secondary};
}

::-webkit-scrollbar-thumb {
  background:${props => props.theme.colors.scroll} ;
  border-radius: 25px;
}

::-webkit-scrollbar-thumb:hover {
  background: ${props => props.theme.colors.primary}; 
}

::-webkit-scrollbar-thumb:scroll {
  background: ${props => props.theme.colors.primary};
}

html{
  scroll-behavior: smooth;
  overflow-x: hidden !important;
}

body{
    box-sizing: border-box;
    font-family: "Nunito";
    margin: 0;
    background-color: ${props => props.theme.colors.primary}; 
    color: ${props => props.theme.colors.secondary}; 
    scroll-behavior: smooth;
    overflow-y: overlay;

    a{
      color: ${props => props.theme.colors.secondary};
    }
   
}
`

export const Title = styled.h1`
  text-align: center;
  font-weight: ${fonts.weight.Normal};

  @media (min-width: 600px) {
    font-size: 2.5rem;
  }
`

export const Span = styled.p`
  font-size: small;
  text-align: end;
  padding-right: 1em;
  font-weight: ${fonts.weight.Light};

  @media (min-width: 600px) {
    font-size: 1rem;
  }
`

export const Text = styled.p`
  font-weight: ${fonts.weight.Light};
  padding: 0 0.3em;
  text-align: center;
  font-size: ${fonts.size.UltraSmall};

  @media (min-width: 600px) {
    font-size: ${fonts.size.Normal};
    max-width: 30em;
  }
`


export default GlobalStyles
