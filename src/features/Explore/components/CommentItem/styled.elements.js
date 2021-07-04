import styled from 'styled-components'

export const CommentItem = styled.li`
    display: flex;
    align-items: flex-start;

    padding: 0 16px 16px 16px;
`
export const Info = styled.div`
    flex: 1;
    word-wrap: break-word;

    padding: 0 8px;
`
export const Name = styled.span`
    display: block;

    font-size: 14px;
    word-wrap: break-word;
    text-overflow: clip;
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
export const Actions = styled.div``
