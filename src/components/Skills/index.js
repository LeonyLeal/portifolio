import React from 'react'
import { Title } from '../../styles/GlobalStyles'


import { Card, CardWrapper, Svg, Description,SkillsContainer, Slider } from './style2'



function Skills() {
  return (
    <SkillsContainer id="Section-C">
      <Title>Skills</Title>
      <CardWrapper>
        <Card id="card">
        <Slider id="Slider"/>
        <Svg id="Svg"/>
        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu.</Description>
        </Card>
        <Card id="card">
        <Slider id="Slider"/>
        <Svg id="Svg"/>
        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu.</Description>
        </Card>
        <Card id="card">
        <Slider id="Slider"/>
        <Svg id="Svg"/>
        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu.</Description>
        </Card>
        <Card id="card">
        <Slider id="Slider"/>
        <Svg id="Svg"/>
        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu.</Description>
        </Card>
      </CardWrapper>
    </SkillsContainer>
  )
}

export default Skills
