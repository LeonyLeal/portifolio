import React, {useRef } from 'react'
import { palette, Title } from '../../styles/GlobalStyles'
import Card from '../../components/Card'

import {  CardWrapper, SkillsContainer, Slide, SlideButton } from './style'

import cardRedSVG    from '../../img/cards/card_red.svg'
import cardGreenSVG  from '../../img/cards/card_green.svg'
import cardBlueSVG   from '../../img/cards/card_blue.svg'
import cardPurpleSVG from '../../img/cards/card_purple.svg'
import htmlSVG       from '../../img/cards/html.svg'
import designSVG     from '../../img/cards/design.svg'
import mobileSVG     from '../../img/cards/mobile.svg'
import reactSVG      from '../../img/cards/react.svg'




function Skills() {


  const slideRef = useRef(Function);

const previous = () =>{
  if(slideRef.current.scrollLeft < 18){
    return slideRef.current.scrollLeft += 945
  }
  return slideRef.current.scrollLeft -= 200
}

const next = () =>{
  if(slideRef.current.scrollLeft > 850){
    return slideRef.current.scrollLeft -= 945
  }
  return slideRef.current.scrollLeft += 200
}


  return (
    <SkillsContainer id="Section-C">
      <Title>Skills</Title>
      <Slide>
        <SlideButton onClick={() => previous()} id="previous" >&#60;</SlideButton>
        <SlideButton onClick={() => next()} id="next">&#62;</SlideButton>
      <CardWrapper ref={slideRef} id="slides">
        <Card wave={cardRedSVG}    icon={htmlSVG}   card_fill={palette.cards.background.red} shadow={palette.cards.border.red} shadow_hover={palette.cards.border.selectedRed} >lksdmlkasmdaklsd klasdmsld slkdmas dsalkdmsald salkdmaslmd aslkdmaslkdma dalskdm aslkd aslkd aslkdmasl kmaslkd masldk amsd lkasd lkasmd laskdm aslkd asd askdm aslksld </Card>
        <Card wave={cardGreenSVG}  icon={designSVG} card_fill={palette.cards.background.green} shadow={palette.cards.border.green} shadow_hover={palette.cards.border.selectedGreen} >lksdmlkasmdaklsd klasdmsld slkdmas dsalkdmsald salkdmaslmd aslkdmaslkdma dalskdm aslkd aslkd aslkdmasl kmaslkd masldk amsd lkasd lkasmd laskdm aslkd asd askdm aslksld </Card>
        <Card wave={cardBlueSVG}   icon={mobileSVG} card_fill={palette.cards.background.blue} shadow={palette.cards.border.blue} shadow_hover={palette.cards.border.selectedBlue} >lksdmlkasmdaklsd klasdmsld slkdmas dsalkdmsald salkdmaslmd aslkdmaslkdma dalskdm aslkd aslkd aslkdmasl kmaslkd masldk amsd lkasd lkasmd laskdm aslkd asd askdm aslksld </Card>
        <Card wave={cardPurpleSVG} icon={reactSVG}  card_fill={palette.cards.background.purple} shadow={palette.cards.border.purple} shadow_hover={palette.cards.border.selectedPurple} >lksdmlkasmdaklsd klasdmsld slkdmas dsalkdmsald salkdmaslmd aslkdmaslkdma dalskdm aslkd aslkd aslkdmasl kmaslkd masldk amsd lkasd lkasmd laskdm aslkd asd askdm aslksld </Card>
      </CardWrapper>
      </Slide>
    </SkillsContainer>
  )
}

export default Skills
