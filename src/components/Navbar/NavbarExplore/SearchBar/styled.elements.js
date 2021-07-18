import { down } from 'styled-breakpoints'
import styled from 'styled-components'

export const SearchBarContainer = styled.div`
    position: relative;
    display: flex;
    width: 50%;

    background-color: #ffffff;
    border-radius: 50px;
    border: 1px solid #000000;
    transition: all 250ms ease-in-out;

    &:hover,
    :focus {
        outline: 0;
        border: 1px solid transparent;
        border-bottom: 1px solid #575756;
        border-radius: 0;
        background-position: 98% center;
    }

    ${down('sm')} {
        width: 100%;
    }
`
export const Search = styled.input`
    margin: auto;
    flex: 1;
    padding: 14px;
    font-size: 14px;

    border-radius: 50px;
    border: none;
    outline: none;
`
export const BtnSearch = styled.div`
    width: 15%;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const Results = styled.div`
    position: absolute;
    top: 50px;
    left: 0;
    z-index: 1;

    display: ${(props) => (props.isDisable ? 'none' : 'block')};
    width: 100%;
    background-color: #ffffff;
    border: 1px solid ${(props) => props.theme.palette.baseLine.main};
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
`
export const ResultList = styled.ul`
    list-style: none;
    padding: 0;
    height: ${(props) => (props.numberItems > 7 ? '40vh' : 'calc(props.numberItems*40px)')};
    overflow-y: scroll;
`
export const ViewControl = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
