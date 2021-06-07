import React from 'react'

import PropTypes from 'prop-types'
import Slider from 'react-slick'

import { DescriptionContent } from '../DescriptionContent'
import { Container } from './Description.element'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const propType = {
    srcList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            srcBackground: PropTypes.string,
            srcImageCard: PropTypes.string,
            titleImageCard: PropTypes.string,
            titleDescription: PropTypes.string,
            deciption: PropTypes.string,
        })
    ),
}

export const DescriptionSlide = ({ srcList }) => {
    let settings = {
        accessibility: false,
        pauseOnHover: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        speed: 400,
        autoplaySpeed: 6000,
    }

    return (
        <Container className="mt-5 carousel">
            <Slider {...settings}>
                {srcList
                    ? srcList.map((infoPlace) => (
                          <DescriptionContent
                              key={infoPlace.id}
                              content={infoPlace.titleDescription}
                              fontSize="8rem"
                              fontWeight={700}
                          />
                      ))
                    : null}
            </Slider>
            <Slider {...settings} dots={true}>
                {srcList
                    ? srcList.map((infoPlace) => (
                          <DescriptionContent
                              key={infoPlace.id}
                              content={infoPlace.description}
                              fontSize="1.5rem"
                          />
                      ))
                    : null}
            </Slider>
        </Container>
    )
}

DescriptionSlide.propTypes = propType

export default DescriptionSlide
