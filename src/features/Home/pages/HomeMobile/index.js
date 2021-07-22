import React from 'react'

import { FaLongArrowAltRight } from 'react-icons/fa'

import { ButtonWithIcons } from '../../../../components/ButtonWithIcons'
import { NavbarMobile } from '../../../../components/NavbarMobile'

import {
    Container,
    BackgroundImage,
    ButtonExplore,
    Slogan,
    WrapperBrn,
} from './HomeMobile.elements'

export const HomeMobile = () => {
    return (
        <Container>
            <NavbarMobile background_color="#050505" text_color="#fff" />
            <BackgroundImage />
            <Slogan>
                <h1>DREAM DISCOVER GO</h1>
                <p>Enjoy the best destinations and share with everybody.</p>
                <WrapperBrn>
                    <ButtonExplore>
                        <ButtonWithIcons
                            width="120px"
                            padding="10px"
                            background_color="#59ABAE"
                            text_color="white"
                            endIcon={FaLongArrowAltRight}
                            to="/explore"
                        >
                            Explore
                        </ButtonWithIcons>
                    </ButtonExplore>
                </WrapperBrn>
            </Slogan>
        </Container>
    )
}

export default HomeMobile
