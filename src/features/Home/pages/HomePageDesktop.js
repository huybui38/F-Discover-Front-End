import React from 'react'

import { Navbar } from '../../../components/Navbar'
import { BackgroundSlide } from '../components/BackgroundSlide'
import { CardSlide } from '../components/CardSlide'
import { DescriptionSlide } from '../components/DescriptionSlide'

import { infoImageHome } from '../../../utils/infoImage'
import { Container, HomeWrapper } from './Home.elements'

export const HomePageDesktop = () => {
    return (
        <Container>
            <BackgroundSlide srcList={infoImageHome}></BackgroundSlide>
            <HomeWrapper>
                <Navbar />
            </HomeWrapper>
            <CardSlide srcList={infoImageHome} />
            <DescriptionSlide srcList={infoImageHome} />
        </Container>
    )
}

export default HomePageDesktop
