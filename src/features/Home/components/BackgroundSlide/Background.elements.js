import styled from 'styled-components'

export const BackgroundContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    & .slick-slider > .slick-arrow {
        display: none !important;
    }
`
