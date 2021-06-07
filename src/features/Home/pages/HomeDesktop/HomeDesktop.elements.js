import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    overflow: hidden;
`

export const HomeWrapper = styled.div`
    z-index: 1;
    max-width: 1200px;
    height: 100vh;
    margin: 0 auto;
    position: relative;
`

export const ButtonExplore = styled.div`
    position: absolute;
    top: 65%;
    left: 0;
    z-index: 1;

    margin-left: calc(calc(calc(100% - 1200px) / 2) + 80px);
`
export const Decoration = styled.div`
    position: absolute;
    bottom: 10%;
    right: calc(calc(100% - 1200px) / 2);

    font-size: 1.2rem;
    opacity: 0.5;
    color: white;
`
