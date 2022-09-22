import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills/";
import { ThemeProvider } from "styled-components";
import Projectxs from "./sections/Projectx";
import Socials from "./sections/Social";
import light from "./styles/theme/light";
import dark from "./styles/theme/dark";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  const [theme, setTheme] = useState(dark);

  const onThemeClick = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <Navbar onChangeTheme={onThemeClick} />
        <AboutMe />
        <Socials />
        <Skills />
        <Projectxs />
      </>
    </ThemeProvider>
  );
}

export default App;
