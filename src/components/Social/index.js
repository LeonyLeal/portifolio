import React from 'react'

import { SocialContainer, SociaLink, SocialWrapper } from './style'

function Socials() {
    return (
        <SocialContainer id="Social">
            <SocialWrapper>
                <SociaLink id="social-1" target="_blank" href="https://www.facebook.com/Leony9991/">Facebook</SociaLink>
                <SociaLink id="social-2" target="_blank" href="https://www.figma.com/@leony" >Figma</SociaLink>
                <SociaLink id="social-3" target="_blank" href="https://www.github.com/LeonyLeal" >Github</SociaLink>
                <SociaLink id="social-4" target="_blank" href="https://www.instagram.com/leony.1999/" >Instagram</SociaLink>
                <SociaLink id="social-5" target="_blank" href="https://www.linkedin.com/in/leony-leal99/" >Linkedin</SociaLink>
                <SociaLink id="social-6" target="_blank" href="https://twitter.com/NoLye99" >Twitter</SociaLink>
            </SocialWrapper>
        </SocialContainer>
    )
}

export default Socials