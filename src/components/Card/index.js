import React from 'react'
import {Container, Circle, Svg, Description} from './style'


function Card(props) {

  const insWave = props.wave
  const insIcon = props.icon
  const insShadow = props.shadow
  const insCardFill = props.card_fill
  const insShadowHover = props.shadow_hover
  const textIns = props.children

 //Card Components
  return (
    <Container wave={insWave} shadow_hover={insShadowHover} id="card">
      <Circle card_fill={insCardFill} id="background"/>
      <Svg id="svg" icon={insIcon} shadow={insShadow} shadow_hover={insShadowHover}  />
      <Description id="description">{textIns}</Description>
    </Container>
  )
}

export default Card
