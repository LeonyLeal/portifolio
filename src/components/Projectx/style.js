import styled from 'styled-components'

export const ProjectWrapper = styled.section`
  display: flex;
  margin: 5em 0;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: center;
`
export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;

  > #NameProject {
    font-size: 2.5rem;
    font-weight: 600;
    p {
      font-size: 100px;
    }
  }
`
export const ProjectCard = styled.div`
  display: flex;
  flex-direction: row;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`

export const Preview = styled.img`
  margin: 2em;
  width: 10em;
  @media (min-width: 700px) {
    width: 14em;
  }
`


export const TextWrapper = styled.div `
padding: 0 2em;`
