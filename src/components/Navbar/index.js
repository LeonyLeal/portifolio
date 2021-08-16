import React from 'react'

import {
    Nav,
    Menu,
    MenuLink,
    Burger,
    Svg,
    Theme,
} from './style'

function Navbar(){
    return(
        <Nav>
            <Menu>
                <MenuLink href="#Who">Quem?</MenuLink>
                <MenuLink href="#Social">Social</MenuLink>
                <MenuLink href="#Skills">Skills</MenuLink>
                <MenuLink href="#Projects">Projects</MenuLink>
            </Menu>
            <Theme id="themeMenu" onClick={() => console.log("Tema Mudado2")} />
            <Svg>
            <Burger onClick={() => console.log("Menu")}/>
            <Theme onClick={() => console.log("Tema Mudado")}/>
            </Svg>
        </Nav>
    )
}

export default Navbar