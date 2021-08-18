import styled from 'styled-components'

import BurgerSVG from '../../img/BurgerSVG.svg'
import ThemeSVG from '../../img/ThemeSVG.svg'

export const Nav = styled.nav`
  z-index: 10;
  position: fixed;
  align-items: center;
  top: 0.5em;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`
export const Menu = styled.div`
  visibility: hidden;
  display: flex;
  min-height: 2.75em;
  margin: 0 3.125em;
  background: transparent;
  border: solid 1px rgba(255, 0, 184, 0) 0%, #ff00b8 17.19%, #ff007a 80.73%,
    rgba(255, 0, 122, 0) 100%;
  border-radius: 0 0 10px 10px;
  width: fit-content;
  text-align: center;
  align-items: center;
  justify-content: center;
  justify-items: center;

  @media (min-width: 600px) {
    visibility: visible;
  }
`
export const MenuLink = styled.a`
  color: #f2f2f2;
  padding: 0 10px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.4rem;
`

export const Svg = styled.div`
  position: fixed;
  top: 1em;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0px 1em;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  height: fit-content;

  @media (min-width: 600px) {
    visibility: hidden;
  }
`

export const Burger = styled.a`
  background: url(${BurgerSVG});
  visibility: visible;
  background-position: center center;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  cursor: pointer;
  @media (min-width: 600px) {
    visibility: hidden;
  }
`
export const Theme = styled.a`
  background: url(${ThemeSVG});
  background-position: center center;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  cursor: pointer;

  &#Theme {
    visibility: hidden;
    @media (min-width: 600px) {
      visibility: visible;
      margin: 0 25px;
    }
  }
`
