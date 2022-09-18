import styled from "styled-components";

export const ProjectWrapper = styled.section`
  display: flex;
  min-height: fit-content;
  margin-top: 25vh;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: center;

  > #Projects {
    margin: 0;
    font-size: 2rem;
    @media (min-width: 1370px) {
      font-size: 2.5rem;
    }
  }
`;
export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;

  > #NameProject {
    font-size: 2rem;
    @media (min-width: 1370px) {
      font-size: 2.5rem;
      font-weight: 600;
    }
  }
`;

export const Link = styled.a`
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
  font-size: 1.2rem;
`;
