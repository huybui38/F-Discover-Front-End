import React from 'react'

import { FaLongArrowAltRight } from 'react-icons/fa'

import { ButtonWithIcons } from '../../../../components/ButtonWithIcons'
import { BackgroundSlide } from '../../components/BackgroundSlide'
import { CardSlide } from '../../components/CardSlide'
import { DescriptionSlide } from '../../components/DescriptionSlide'
import { Navbar } from '../../components/NavbarHome'

import { infoImageHome } from '../../../../utils/infoImage'
import { Container, HomeWrapper, ButtonExplore, Decoration } from './HomeDesktop.elements'

export const HomeDesktop = () => {
    return (
        <Container>
            <BackgroundSlide srcList={infoImageHome}></BackgroundSlide>
            <HomeWrapper>
                <Navbar />
            </HomeWrapper>
            <CardSlide srcList={infoImageHome} />
            <DescriptionSlide srcList={infoImageHome} />
            <ButtonExplore>
                <ButtonWithIcons
                    width="120px"
                    padding="10px"
                    background_color="#59ABAE"
                    text_color="white"
                    endIcon={FaLongArrowAltRight}
                    animation={true}
                    to="/explore"
                >
                    Explore
                </ButtonWithIcons>
            </ButtonExplore>
            <Decoration>03__________07</Decoration>
        </Container>
    )
}

export default HomeDesktop
