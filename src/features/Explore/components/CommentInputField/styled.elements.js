import styled from 'styled-components'

export const FieldComment = styled.div`
    display: flex;
    align-items: center;
    height: 56px;
    border-top: 1px solid ${(props) => props.theme.palette.baseLine.main};
    padding: 0 4px;

    & > input {
        flex: 1;
        border: none;
        outline: none;
    }
`
