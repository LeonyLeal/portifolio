import React, {useRef } from 'react'
import { Title } from '../../styles/GlobalStyles'


import { Card, CardWrapper, Svg, Description,SkillsContainer, Background, Slide, SlideButton } from './style'



function Skills() {



  const slide= (n1,n2,n3) => {
    if( slideRef.current.scrollLeft === n1){
      return  slideRef.current.scrollLeft -= n2
    }
      return slideRef.current.scrollLeft -= n3
    
  }

  const slideRef = useRef(Function);



  

  return (
    <SkillsContainer id="Section-C">
      <Title>Skills</Title>
      <Slide>
        <SlideButton onClick={() => console.log(slide(18, -942, 200))} id="previous" >&#60;</SlideButton>
        <SlideButton onClick={() => console.log(slide(1130, 942, -200))} id="next">&#62;</SlideButton>
      <CardWrapper ref={slideRef} id="slides">
        <Card id="card">
        <Background id="background"/>
        <Svg id="svg"/>
        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu.</Description>
        </Card>
        <Card id="card">
        <Background id="background"/>
        <Svg id="svg"/>
        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu.</Description>
        </Card>
        <Card id="card">
        <Background id="background"/>
        <Svg id="svg"/>
        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu.</Description>
        </Card>
        <Card id="card">
        <Background id="background"/>
        <Svg id="svg"/>
        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu.</Description>
        </Card>
      </CardWrapper>
      </Slide>
    </SkillsContainer>
  )
}

export default Skills
