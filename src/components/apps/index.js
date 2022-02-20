import React from 'react'
import {Container,Title,Description,Preview} from './style'


function Apps (props) {

   const insTitle = props.title
   const insPreview = props.preview


    return(
        <Container>
            <Title>{insTitle}</Title>
            <Description>{props.children}</Description>
            <Preview src={insPreview} ></Preview>
        </Container>
    )
}

export default Apps