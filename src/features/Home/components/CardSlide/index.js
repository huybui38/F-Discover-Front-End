import React from 'react'

import PropTypes from 'prop-types'
import Slider from 'react-slick'

import { CardImage } from '../../components/CardImage'

import { Container } from './CardSlide.elements'

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

export const CardSlide = ({ srcList }) => {
    let settings = {
        accessibility: true,
        pauseOnHover: false,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: 'linear',
        autoplay: true,
        speed: 400,
        autoplaySpeed: 6000,
    }
    return (
        <Container className="mt-5 carousel">
            <Slider {...settings}>
                {srcList
                    ? srcList.map((infoPlace) => (
                          <CardImage key={infoPlace.id} infoPlace={infoPlace} />
                      ))
                    : null}
            </Slider>
        </Container>
    )
}

CardSlide.propTypes = propType
export default CardSlide
