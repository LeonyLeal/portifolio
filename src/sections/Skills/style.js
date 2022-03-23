import styled from 'styled-components'


export const SkillsContainer = styled.section`
  /*background: linear-gradient(180deg, rgba(165, 11, 252, 0) 0%, #A00DFF 17.19%, #CB00E8 80.73%, rgba(196, 2, 235, 0) 100%);*/
    margin-top: 10vh;
    min-height: fit-content;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
`

export const Slide = styled.div `
width: 21em;
overflow: hidden;

@media (min-width:900px){
  width: fit-content;
}


 #slides > div {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  scroll-snap-align: center;
  flex-shrink: 0;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 500ms;
}
`

export const SlideButton = styled.div `
position: absolute;
width: 1.5em;
height: 1.5em;
background: ${props => props.theme.colors.secondary};
box-shadow: 0px 0px 5px 1px  ${props => props.theme.colors.secondary};
color: ${props => props.theme.colors.primary};
border-radius: 100%;
text-align: center;
z-index: 100;
cursor: pointer;
user-select: none;

  @media (min-width:900px){
    visibility: hidden;
  }

:first-child{
  margin: 15em 0 0 -1em ;

}

:nth-child(2){
  margin: 15em 0 0 20.4em
}

`

export const CardWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar{
        height: 0px;
    }
  
`