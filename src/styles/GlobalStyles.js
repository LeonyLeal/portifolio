import styled, { createGlobalStyle } from 'styled-components'


// variables Colors

export const colors = {

  //Primaries Colors:
  Primary: "#252525",
  Secondary: "#F2F2F2",
  PrimaryLinear: "linear-gradient(180deg,rgba(255, 0, 184, 0) 0%,#ff00b8 17.19%,#ff007a 80.73%,rgba(255, 0, 122, 0) 100%)",
  Bubbles: "radial-gradient(50% 50% at 50% 50%, #cc0092 0%, #ff4dcc 87.5%)",

  //Cards Colors:
  CardRed:"linear-gradient(180deg, #EA3A46 0%, #BF323C 100%)",
  CardGreen:"linear-gradient(180deg, #55BAA3 0%, #44A891 100%)",
  CardBlue:"linear-gradient(180deg, #27ABEE 0%, #228EC5 100%)",
  CardPurple:"linear-gradient(180deg, #8765DE 0%, #694CB3 100%)",
  BorderRed:"#EA3A46",
  BorderGreen:"#55BAA3",
  BorderBlue:"#27ABEE",
  BorderPurple:"#8765DE",
  DarkRed:"#9A1F27",
  DarkGreen:"#137D66",
  DarkBlue:"#166C98",
  DarkPurple:"#5B409C",
}

export const  fonts = {
  weight: {
    ExtraLight:"300",
    Light:"400",
    Normal:"500",
    Large:"600",
  },
  size: {
    UltraSmall:"1rem",
    small:"1.2rem",
    Normal:"1.4rem",
    Large:"2rem",
  }
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
  background: ${colors.Secondary};
}

::-webkit-scrollbar-thumb:scroll {
  background: ${colors.secondaryColor};
}

html{
  scroll-behavior: smooth;
}

body{
    box-sizing: border-box;
    font-family: "Nunito";
    margin: 0;
    background-color: ${colors.Primary};
    color: ${colors.Secondary};
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
