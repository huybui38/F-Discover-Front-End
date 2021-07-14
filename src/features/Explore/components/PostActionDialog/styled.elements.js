import styled from 'styled-components'

export const OptionList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`
export const OptionItem = styled.li`
    font-size: 14px;
    text-align: center;
    padding: 16px 0;
    border-top: 1px solid ${(props) => props.theme.palette.baseLine.main};
    cursor: pointer;
    &:last-child {
        color: red;
    }
`
