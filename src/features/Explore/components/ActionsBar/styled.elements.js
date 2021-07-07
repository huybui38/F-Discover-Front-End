import { down } from 'styled-breakpoints'
import styled from 'styled-components'

import { Button } from '../../../../components/Button'

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
export const ShareWrapper = styled.div`
    position: relative;
`
export const ShareMethod = styled.div`
    position: absolute;
    top: -50px;
    left: -150px;
    z-index: 1;

    display: ${(props) => (props.disabled ? 'none' : 'flex')};
    align-items: center;
    justify-content: space-between;

    width: 300px;
    height: 32px;
    border: 1px solid ${(props) => props.theme.palette.baseLine.main};
    background-color: ${(props) => props.theme.palette.bgrColor.dark};

    &::before {
        content: '';
        display: block;
        width: 20px;
        height: 20px;

        position: absolute;
        bottom: -20px;
        left: 50%;

        clip-path: polygon(100% 0, 0 0, 50% 50%);
        background-color: ${(props) => props.theme.palette.baseLine.main};

        ${down('lg')} {
            display: none;
        }
    }

    ${down('lg')} {
        top: 130px;
        left: -250px;
    }
`
export const UrlShare = styled.input`
    flex: 1;
    height: 32px;
    padding: 0 8px;

    background-color: ${(props) => props.theme.palette.bgrColor.dark};
    border: none;
    outline: none;

    &:focus {
        z-index: 1;
        border: 1px solid ${(props) => props.theme.palette.primary.light};
    }
`
export const BtnCopy = styled.div`
    width: 50px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;

    border-left: 1px solid ${(props) => props.theme.palette.baseLine.main};
`
export const CopyChecked = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    & > svg {
        width: 14px;
        height: 14px;
        color: ${(props) => props.theme.palette.primary.light};
    }
`
