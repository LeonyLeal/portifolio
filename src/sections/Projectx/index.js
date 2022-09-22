import React from "react";
import { Title } from "../../styles/GlobalStyles";
import projectOne_1 from "../../img/projects/projectOne_1.png";
import { ProjectWrapper, ProjectContainer, Link } from "./style";
import Apps from "../../components/apps";

function Projectxs() {
  return (
    <ProjectWrapper id="Section-D">
      <Title id="Projects">Projetos</Title>
      <ProjectContainer>
        <Apps title="Crud(Django + Vue.js)" preview={projectOne_1}>
          Desafio feito para testar minhas habilidades de criar backend em
          Django e consumir a API através do frontend(Vue.js), utilizando as
          dependências Django-cors-headers, django rest Framework no backend e
          no frontend axios e Vuetify. Projeto disponível no{" "}
          <Link
            id="Desafio Crud"
            target="_blank"
            href="https://github.com/LeonyLeal/Desafio-CRUD"
          >
            Github
          </Link>
          .
        </Apps>
      </ProjectContainer>
    </ProjectWrapper>
  );
}

export default Projectxs;
