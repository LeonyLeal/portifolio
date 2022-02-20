import styled, { createGlobalStyle } from 'styled-components'

// variables Colors

export const palette = {
  primary: {
    main: '#252525',
    light: '#F4F4F4',
    dark: '#252525',
  },
  secondary: {
    main:
      'linear-gradient(180deg,rgba(255, 0, 184, 0) 0%,#ff00b8 17.19%,#ff007a 80.73%,rgba(255, 0, 122, 0) 100%)',
    light:
      'linear-gradient(180deg, rgba(246, 235, 207, 0) 0%, rgba(255, 219, 25, 0) 0.01%, #FFDB19 13.02%, #FFB800 79.17%, rgba(255, 184, 0, 0) 100%)',
    dark:
      'linear-gradient(180deg,rgba(255, 0, 184, 0) 0%,#ff00b8 17.19%,#ff007a 80.73%,rgba(255, 0, 122, 0) 100%)',
  },
  bubbles: {
    main: 'radial-gradient(50% 50% at 50% 50%, #cc0092 0%, #ff4dcc 87.5%)',
    light: 'radial-gradient(50% 50% at 50% 50%, #D7BD2F 0%, #FFE866 100%)',
    dark: 'radial-gradient(50% 50% at 50% 50%, #cc0092 0%, #ff4dcc 87.5%)',
  },
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
    background: rgba(37, 37, 37, 0.0);
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 25px;
}

::-webkit-scrollbar-thumb:hover {
  background: ${palette.primary.light};
}

::-webkit-scrollbar-thumb:scroll {
  background: ${palette.primary.light};
}

html{
  scroll-behavior: smooth;
}

body{
    box-sizing: border-box;
    font-family: "Nunito";
    margin: 0;
    background-color: ${palette.primary.main};
    color: ${palette.primary.light};
    overflow-x: hidden;
    scroll-behavior: smooth;
    overflow-y: overlay;
   
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
