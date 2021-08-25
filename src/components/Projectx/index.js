import React from 'react'
import { Title, Text as Description } from '../../styles/GlobalStyles'
import projectOne_1 from '../../img/projects/projectOne_1.png'
import projectOne_2 from '../../img/projects/projectOne_2.png'

import { ProjectWrapper, ProjectContainer, ProjectCard, Preview, TextWrapper } from './style'

function Projectxs() {
  return (
    <ProjectWrapper id="Section-D">
      <Title id="Projects">Projetos</Title>
      <ProjectContainer>
        <Title id="NameProject">Forge</Title>
        <TextWrapper>
        <Description>
          aplicativo para auxiliar em um projeto de faculdade de engenharia de
          materiais, aumentar a porcentagem do material reciclado de lata, e a
          função principal do aplicativo é mostrar onde estão localizadas essas
          areas de reciclagem isso podendo gerar lucro para a pessoa que entrega
          a lata...
        </Description>
        </TextWrapper>
        <ProjectCard>
          <Preview src={projectOne_1} />
          <Preview src={projectOne_2} />
        </ProjectCard>
      </ProjectContainer>
    </ProjectWrapper>
  )
}

export default Projectxs
