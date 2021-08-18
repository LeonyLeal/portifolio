import React from 'react'
import { Title } from '../../styles/GlobalStyles'

import { Card, CardWrapper, SkillsContainer } from './style'

function Skills() {
  return (
    <SkillsContainer id="Section-C">
      <Title>Skills</Title>
      <CardWrapper>
        <Card id="card-1"></Card>
        <Card id="card-2"></Card>
        <Card id="card-3"></Card>
        <Card id="card-4"></Card>
      </CardWrapper>
    </SkillsContainer>
  )
}

export default Skills
