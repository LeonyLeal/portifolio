import { GlobalStyles } from './styles/GlobalStyles'

import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projectxs from './components/Projectx'
import Socials from './components/Social'

function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Skills />
      <Projectxs />
      <Socials />
      <GlobalStyles />
    </>
  )
}

export default App
