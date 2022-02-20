import React from 'react'
import {Title} from '../../styles/GlobalStyles'
import projectOne_1 from '../../img/projects/projectOne_1.png'
import { ProjectWrapper, ProjectContainer,} from './style'
import Apps from '../../components/apps'

function Projectxs() {
  return (
    <ProjectWrapper id="Section-D">
      <Title id="Projects">Projetos</Title>
      <ProjectContainer>
       <Apps title="Test" preview={projectOne_1}>Pagina de login de um esboço feito no Figma</Apps>
      </ProjectContainer>
    </ProjectWrapper>
  )
}

export default Projectxs
