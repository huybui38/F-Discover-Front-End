import React from 'react'

import { FaLongArrowAltRight } from 'react-icons/fa'

import { ButtonWithIcons } from '../../../../components/ButtonWithIcons'
import { NavbarMobie } from '../../../../components/NavbarMobie'

import { Container, BackgroundImage, ButtonExplore, Slogan } from './HomeMobie.elements'

export const HomeMobie = () => {
    return (
        <Container>
            <NavbarMobie backgroundColor="#050505" textColor="#fff" />
            <BackgroundImage />
            <Slogan>
                <h1>DREAM DISCOVER GO</h1>
                <p>Enjoy the best destinations and share with everybody.</p>
            </Slogan>
            <ButtonExplore>
                <ButtonWithIcons
                    width="120px"
                    padding="10px"
                    backgroundColor="#59ABAE"
                    textColor="white"
                    endIcon={FaLongArrowAltRight}
                    to="/explore"
                >
                    Explore
                </ButtonWithIcons>
            </ButtonExplore>
        </Container>
    )
}

export default HomeMobie
