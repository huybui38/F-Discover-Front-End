import styled, { keyframes } from 'styled-components'

const appear = keyframes`
    0%{
        opacity: 1;
        width: 10px;
        height: 10px;
        font-size: 0;
    }
    10%{
        top: -5px;
        left: -2px;
        opacity: 1;
        width: 25px;
        height: 25px;
        font-size: 14px;
    }
    95%{
        top: -5px;
        left: -2px;
        opacity: 1;
        width: 25px;
        height: 25px;
        font-size: 14px;
    }
    100%{
        opacity: 1;
        width: 10px;
        height: 10px;
        font-size: 0;
    }
`

export const Container = styled.div`
    width: 600px;

    position: absolute;
    top: 35%;
    left: calc(calc(100% - 1200px) / 2);

    margin-left: 80px;

    & .slick-slider > .slick-arrow {
        display: none !important;
    }

    & .slick-slider {
        position: relative;
    }

    & .slick-slider > .slick-dots {
        position: absolute;
        top: 0;
        left: -80px;

        display: flex !important;
        flex-direction: column;

        transform: translateY(-150px);
    }

    & .slick-slider > .slick-dots > li {
        margin-bottom: 75px;
        position: relative;
        z-index: 1;
    }

    & .slick-slider > .slick-dots > li > button {
        position: relative;
        /* width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #c2d2cf;

        margin: auto;
        opacity: 1; */
    }

    & .slick-slider > .slick-dots > li:first-child > button::after {
        height: 170px;
        top: -75px;
        left: 45%;
    }

    & .slick-slider > .slick-dots > li > button::after {
        content: '';
        position: absolute;
        top: 10px;
        left: 45%;
        z-index: -1;

        width: 1;
        height: 85px;
        border: 1px;
        border-style: solid;
        border-color: #c2d2cf;

        opacity: 0.4;
    }

    & .slick-slider > .slick-dots > li:nth-child(1) > button::before {
        content: '1';
        position: absolute;
        top: 0px;
        left: 5px;
        z-index: 2;

        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;

        font-size: 0;
        opacity: 1;

        background-color: #c2d2cf;
    }

    & .slick-slider > .slick-dots > li:nth-child(2) > button::before {
        content: '2';
        position: absolute;
        top: 0px;
        left: 5px;
        z-index: 2;

        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;

        font-size: 0;
        opacity: 1;

        background-color: #c2d2cf;
    }

    & .slick-slider > .slick-dots > li:nth-child(3) > button::before {
        content: '3';
        position: absolute;
        top: 0px;
        left: 5px;
        z-index: 2;

        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;

        font-size: 0;
        opacity: 1;

        background-color: #c2d2cf;
    }

    & .slick-slider > .slick-dots > li:nth-child(4) > button::before {
        content: '4';
        position: absolute;
        top: 0px;
        left: 5px;
        z-index: 2;

        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;

        font-size: 0;
        opacity: 1;

        background-color: #c2d2cf;
    }

    & .slick-slider > .slick-dots > .slick-active > button::before {
        color: #fff;

        line-height: 25px;
        text-shadow: 1px 1px 2px #000;
        opacity: 1;

        transition: all 0.1s linear 0.1s;
        animation: ${appear} 6s linear;
    }
`
