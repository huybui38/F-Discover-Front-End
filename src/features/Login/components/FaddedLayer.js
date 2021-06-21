import styled from 'styled-components'

// import { FaddedLeftLayer, FaddedRightLayer } from './Container'
let bRight = 284
let widthRight = 354
export const FaddedLeftLayer = styled.div`
    width: calc(100% - ${widthRight}px - ${bRight}px);
    /* height: 100%; */
    border-top: 100vh solid rgba(5, 5, 5, 0.5);
    border-right: ${bRight}px solid rgba(0, 96, 96, 0.5);
    &:after {
        background-color: aqua;
    }
`
export const FaddedRightLayer = styled.div`
    flex-grow: 1;
    background-color: rgba(0, 96, 96, 0.5);
`

function FaddedLayer() {
    return (
        <>
            <FaddedLeftLayer />
            <FaddedRightLayer />
        </>
    )
}
export default FaddedLayer
