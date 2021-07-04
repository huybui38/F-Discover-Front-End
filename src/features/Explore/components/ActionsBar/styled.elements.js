import { down } from 'styled-breakpoints'
import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 70px;
    padding: 4px 16px;
    border-bottom: 1px solid ${(props) => props.theme.palette.baseLine.main};

    ${down('lg')} {
        height: 100%;
    }
`
export const Actions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    ${down('lg')} {
        display: block;
    }
`
export const ActionItem = styled.div`
    width: calc(100% / 3);
    display: flex;
    align-items: center;

    ${down('lg')} {
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 8px 0;
    }
`
export const Seen = styled.span`
    ${down('lg')} {
        display: none;
    }
`
