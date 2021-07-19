import styled from 'styled-components'

export const CommentItem = styled.li`
    display: flex;
    align-items: flex-start;

    padding: 0 16px 16px 16px;

    &:hover {
        .cmtItem__actions > div {
            opacity: 1;
        }
    }
`
export const Info = styled.div`
    flex: 1;
    word-wrap: break-word;

    padding: 0 8px;
`
export const Content = styled.span`
    font-size: 13px;
    display: block;
    word-wrap: break-all;
    text-overflow: clip;
`
export const Date = styled.span`
    font-size: 12px;
    color: ${(props) => props.theme.palette.text.light};
`
export const Actions = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Option = styled.div`
    opacity: 0;
    cursor: pointer;
`
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
