import styled, { keyframes } from 'styled-components'

const moveHeight = keyframes`
    0% {
        opacity: 0.8;
    }
  
    10% {
        opacity: 1;
    }

    75% {
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
`

export const Container = styled.div`
    width: 600px;
    height: 300px;

    position: absolute;
    top: 20%;
    right: -100px;

    & .slick-slider > .slick-arrow {
        display: none !important;
    }

    &
        .slick-slider
        > .slick-list
        > .slick-track
        > .slick-current
        > div
        > .card-image__wrapper
        > .card-image {
        height: 300px;
        transition: all 0.3s linear 0.3s;
        transform: scale(1.1);
        animation: ${moveHeight} 7s ease-in-out;
    }

    &
        .slick-slider
        > .slick-list
        > .slick-track
        > .slick-slide
        > div
        > .card-image__wrapper
        > .card-image {
        opacity: 0.2;
    }

    &
        .slick-slider
        > .slick-list
        > .slick-track
        > .slick-active
        > div
        > .card-image__wrapper
        > .card-image {
        opacity: 1;
    }
`
