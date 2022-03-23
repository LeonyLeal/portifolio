import React, {useState,useRef} from 'react'
import { Nav, Menu, MenuLink, Burger, Svg, ThemeBtn } from './style'



function Navbar(props) {
  const [checked, setChecked] = useState(true);

  const NavRef = useRef(null)

  const onBurgerClick = () =>{
   checked? setChecked(false): setChecked(true)
   NavRef.current.style.visibility = checked? "visible" : "hidden"
   NavRef.current.parentElement.parentElement.style.overflow = checked? "hidden": "scroll"
   NavRef.current.style.animation = checked? "outIn 1s forwards" : "inOut 1s forwards"
  }

  const onSectionClick = () => {
  NavRef.current.style.animation = "inOut 1s forwards"
  setChecked(true)
  setTimeout(() =>NavRef.current.style.visibility = "hidden", 500)
  }



  return (
    <Nav ref={NavRef} id="Nav" >
    <Menu  ref={NavRef} id="Menu">
      <MenuLink onClick={onSectionClick} href="#Section-A">Quem?</MenuLink>
      <MenuLink onClick={onSectionClick} href="#Section-B">Social</MenuLink>
      <MenuLink onClick={onSectionClick} href="#Section-C">Skills</MenuLink>
      <MenuLink onClick={onSectionClick} href="#Section-D">Projects</MenuLink>
    </Menu>
    <Svg id="Nav_Mobile">
      <Burger id="nav" onClick={onBurgerClick} />
      <ThemeBtn onClick={props.onChangeTheme}/>
    </Svg>
  </Nav>
  )
}

export default Navbar


/*

*/