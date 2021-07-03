import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    height: 70px;
    padding: 4px 16px;
    border-bottom: 1px solid ${(props) => props.theme.palette.baseLine.main};

    & > div {
        display: flex;
    }
    & > span {
        padding-top: 8px;
    }
`
export const Actions = styled.div`
    display: flex;
    width: 100%;
`
export const ActionItem = styled.div`
    width: calc(100% / 3);
    display: flex;
    align-items: center;
`
