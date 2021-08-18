import React from 'react'

import { Nav, Menu, MenuLink, Burger, Svg, Theme } from './style'

function Navbar() {
  return (
    <Nav id="Nav">
      <Menu id="Menu">
        <MenuLink href="#Section-A">Quem?</MenuLink>
        <MenuLink href="#Section-B">Social</MenuLink>
        <MenuLink href="#Section-C">Skills</MenuLink>
        <MenuLink href="#Section-D">Projects</MenuLink>
      </Menu>
      <Theme id="Theme" onClick={() => console.log('Tema Mudado2')} />
      <Svg id="Nav_Mobile">
        <Burger onClick={() => console.log('Menu')} />
        <Theme onClick={() => console.log('Tema Mudado')} />
      </Svg>
    </Nav>
  )
}

export default Navbar
