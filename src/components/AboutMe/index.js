import React from 'react'
import Perfil from '../../img/Perfil.png'

import { AboutMeWrapper, Background, Bubble, Bubbles, Carousel, Content, ContentWrapper, Name, Profile, ProfileWrapper, Span, Text, TextWrapper, Title } from './style'

function AboutMe() {
    return (
        <ContentWrapper>
            <Title id="Who">Quem?</Title>
            <Background>
                <Content>
                    <Name>Leony Leal</Name>
                    <AboutMeWrapper>
                        <TextWrapper>
                            <Text>Desenvolvedor Front-end e Back-End e tenho como objetivo colocação na área como Desenvolvedor Junior. procuro adquirir novas habilidades para expandir o meu leque de habilidades que tragam retorno de valor em projetos. </Text>
                            <Span>Focado em desenvolver o melhor de mim</Span>
                        </TextWrapper>
                        <ProfileWrapper>
                            <Profile src={Perfil}></Profile>
                            <Carousel>Front-end</Carousel>
                        </ProfileWrapper>
                    </AboutMeWrapper>
                </Content>
                <Bubbles>
                    <Bubble id="Bubble1"/>
                    <Bubble id="Bubble2"/>
                    <Bubble id="Bubble3"/>
                    <Bubble id="Bubble4"/>
                    <Bubble id="Bubble5"/>
                    <Bubble id="Bubble6"/>
                    <Bubble id="Bubble7"/>
                </Bubbles>
            </Background>
        </ContentWrapper>
        
    )
}

export default AboutMe