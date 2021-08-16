import styled, {keyframes} from "styled-components";

const fadeIn = keyframes `
0%{
    opacity: 0.7;
}
100%{
    opacity: 1;
}
`



export const SkillsContainer = styled.div `
`

export const CardWrapper = styled.div`
display: grid;
justify-content:space-around;

`

export const Card = styled.div`
display: flex;
background-color: #444444;
width: 275px;
height:450px;
flex-direction: column;
margin: 2em 0;
border-radius: 1em;
@media (min-width:1100px){
grid-row: 1/4;
}

    &#card-1{
    :hover{
        animation-name: ${fadeIn};
	    animation-timing-function: ease-in;
	    animation-duration: .3s;
        background: linear-gradient(180deg, #EA3A46 0%, #BF323C 100%);
        
    }
}
    &#card-2{
    :hover{
        animation-name: ${fadeIn};
	    animation-timing-function: ease-in;
	    animation-duration: .3s;
        background: linear-gradient(180deg, #55BAA3 0%, #44A891 100%);;
        
    }
}
    &#card-3{
    :hover{
        animation-name: ${fadeIn};
	    animation-timing-function: ease-in;
	    animation-duration: .3s;
        background: linear-gradient(180deg, #27ABEE 0%, #228EC5 100%);
        
    }
}
    &#card-4{
    :hover{
        animation-name: ${fadeIn};
	    animation-timing-function: ease-in;
	    animation-duration: .3s;
        background: linear-gradient(180deg, #8765DE 0%, #694CB3 100%);
        
    }
    }
`