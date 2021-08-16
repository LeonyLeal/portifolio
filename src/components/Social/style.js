import styled from "styled-components";

import FacebookSVG from '../../img/facebook.svg'
import FigmaSVG from '../../img/figma.svg'
import GithubSVG from '../../img/github.svg'
import InstagramSVG from '../../img/instagram.svg'
import LinkedinSVG from '../../img/linkedin.svg'
import TwitterSVG from '../../img/twitter.svg'

export const SocialContainer = styled.div `
display: flex;
flex-direction: column;
align-items: center;
`
export const SocialWrapper = styled.div `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
@media (min-width:600px) {
    grid-template-columns: repeat(3, 1fr);
}
`

export const SociaLink = styled.a `
padding:0 2em;
width: 40px;
height: 30px;
cursor: pointer;
background-position: start center;
background-repeat: no-repeat;
color: #f2f2f2;
font-size: 1.2rem;
font-weight: 600;
margin: 0.3em 1em;

&#social-1{
    background-image: url(${FacebookSVG});
    stroke: blue;
    :hover{
        
    }
}
&#social-2{
    background-image: url(${FigmaSVG});
}
&#social-3{
    background-image: url(${GithubSVG});
}
&#social-4{
    background-image: url(${InstagramSVG});
}
&#social-5{
    background-image: url(${LinkedinSVG});
}
&#social-6{
    background-image: url(${TwitterSVG});
}
`