import React from 'react'
import Perfil from '../../img/Perfil.png'
import { Span, Text, Title } from '../../styles/GlobalStyles'
import {
  AboutMeWrapper,
  Background,
  Bubble,
  Bubbles,
  Carousel,
  Content,
  ContentWrapper,
  Name,
  Profile,
  ProfileWrapper,
  TextWrapper,
} from './style'

function AboutMe() {
  return (
    <ContentWrapper id="Section-A">
      <Title id="Who">Quem?</Title>
      <Background id="Background">
        <Content id="Content">
          <Name id="My_Name">Leony Leal</Name>
          <AboutMeWrapper id="About_Me_Wrapper">
            <TextWrapper id="Text_Wrapper">
              <Text id="Description">
                Desenvolvedor Front-end e Back-End e tenho como objetivo
                colocação na área como Desenvolvedor Junior. procuro adquirir
                novas habilidades para expandir o meu leque de habilidades que
                tragam retorno de valor em projetos.{' '}
              </Text>
              <Span id="Phrase">Focado em desenvolver o melhor de mim</Span>
            </TextWrapper>
            <ProfileWrapper id="DivWrapper">
              <Profile src={Perfil} id="Profile_Photo"></Profile>
              <Carousel id="Carousel">Front-end</Carousel>
            </ProfileWrapper>
          </AboutMeWrapper>
        </Content>
        <Bubbles id="Bubbles">
          <Bubble id="Bubble1" />
          <Bubble id="Bubble2" />
          <Bubble id="Bubble3" />
          <Bubble id="Bubble4" />
          <Bubble id="Bubble5" />
          <Bubble id="Bubble6" />
          <Bubble id="Bubble7" />
        </Bubbles>
      </Background>
    </ContentWrapper>
  )
}

export default AboutMe
