import React from 'react'

import {Card, CardWrapper,SkillsContainer} from './style'

function Skills(){
    return(
        <SkillsContainer id="Skills">
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