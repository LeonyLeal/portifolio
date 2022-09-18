import styled from "styled-components";

export const SocialContainer = styled.section`
  margin-top: 0.1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SocialWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SociaLink = styled.a`
  padding: 0 2em;
  width: 40px;
  height: 30px;
  cursor: pointer;
  background-position: start center;
  background-repeat: no-repeat;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0.3em 1em;
  transition: all 0.5s ease-in-out;

  &:nth-child(1) {
    background-image: url(${(props) => props.theme.social.fb});

    :hover {
      background-image: url(${(props) => props.theme.social.fb_fill});
    }
  }
  &:nth-child(2) {
    background-image: url(${(props) => props.theme.social.fg});
    :hover {
      background-image: url(${(props) => props.theme.social.fg_fill});
    }
  }
  &:nth-child(3) {
    background-image: url(${(props) => props.theme.social.gh});
    :hover {
      background-image: url(${(props) => props.theme.social.gh_fill});
    }
  }
  &:nth-child(4) {
    background-image: url(${(props) => props.theme.social.ins});
    :hover {
      background-image: url(${(props) => props.theme.social.ins_fill});
    }
  }
  &:nth-child(5) {
    background-image: url(${(props) => props.theme.social.in});
    :hover {
      background-image: url(${(props) => props.theme.social.in_fill});
    }
  }
  &:nth-child(6) {
    background-image: url(${(props) => props.theme.social.tw});
    :hover {
      background-image: url(${(props) => props.theme.social.tw_fill});
    }
  }
`;
