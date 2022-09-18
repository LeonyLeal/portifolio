import styled from 'styled-components'

export const Container = styled.div`
height: fit-content;
display: flex;
flex-direction: column;
align-items: center;
`
export const Album = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`
export const Title = styled.h1`
text-align: center;
`

export const Description = styled.p`
text-align: center;
width: 80%;
@media (min-width: 1370px) {
    width: 40%;
  }
`

export const Preview = styled.img`
  margin: 2em;
  width: 100%;
  @media (min-width: 1370px) {
    width: 50%;
  }
`




