import React from 'react'

import PropTypes from 'prop-types'
import Slider from 'react-slick'

import { BackgroudImage } from '../BackgroundImage'
import { BackgroundContainer } from './Background.elements'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

export const Background = ({ srcList }) => {
    let settings = {
        fade: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
    }
    console.log('list: ', srcList)
    return (
        <BackgroundContainer className="mt-5 carousel">
            <Slider {...settings}>
                {srcList
                    ? srcList.map((infoImage) => (
                          <BackgroudImage key={infoImage.id} src={infoImage.src} />
                      ))
                    : null}
            </Slider>
        </BackgroundContainer>
    )
}

Background.propTypes = {
    srcList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            src: PropTypes.string,
            title: PropTypes.string,
            deciption: PropTypes.string,
        })
    ),
}

export default Background
