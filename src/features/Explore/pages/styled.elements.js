import { down } from 'styled-breakpoints'
import styled from 'styled-components'

export const FlexWrapper = styled.div`
    position: relative;

    padding: 0 calc(calc(100% - 1200px) / 2);
    width: 1200px;
    height: calc(100vh - 60px);
    overflow-y: scroll;

    display: flex;
    justify-content: flex-end;

    ${down('lg')} {
        width: 100vw;
    }
`
export const MainWrapper = styled.main`
    width: 75%;

    ${down('lg')} {
        width: 100%;
    }
`
