import React from 'react'

import PropTypes from 'prop-types'
import Slider from 'react-slick'

import { BackgroundImage } from '../BackgroundImage'
import { BackgroundContainer } from './Background.elements'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const propType = {
    srcList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            srcBackground: PropTypes.any,
            srcImageCard: PropTypes.any,
            titleImageCard: PropTypes.string,
            titleDescription: PropTypes.string,
            description: PropTypes.string,
        })
    ),
}

export const BackgroundSlide = ({ srcList }) => {
    let settings = {
        accessibility: true,
        pauseOnHover: false,
        fade: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
        autoplay: true,
        speed: 400,
        autoplaySpeed: 6000,
    }
    return (
        <BackgroundContainer className="mt-5 carousel">
            <Slider {...settings}>
                {srcList
                    ? srcList.map((infoImage) => (
                          <BackgroundImage key={infoImage.id} src={infoImage.srcBackground} />
                      ))
                    : null}
            </Slider>
        </BackgroundContainer>
    )
}

BackgroundSlide.propTypes = propType

export default BackgroundSlide
